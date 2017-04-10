import Game from '../models/game';

const getGames = (req, res) => {
  Game.find(null, null, {sort: {postDate: 1}}, (err, games) => {
    if (err) {
      res.send(err);
    }
    res.json(games);
  });
};

const getGame = (req, res) => {
  const {id} = req.params;
  Game.find({_id: id}, (err, game) => {
    if(err){
      res.send(err);
    }
    res.json(game);
  });
};

const postGame = (req, res) => {
  let game = Object.assign(new Game, req.body);
  game.save(err => {
    if(err){
      res.send(err);
    }
    res.json({message: 'Game Created'});
  });
};

const deleteGame = (req, res) => {
  Game.remove({_id: req.params.id}, err => {
    if(err){
      res.send(err)
    }
    res.json({message:'Successfully deleted'});
  });
};



export {getGames, getGame, postGame, deleteGame};
