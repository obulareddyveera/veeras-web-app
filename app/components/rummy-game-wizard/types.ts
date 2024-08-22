export type PlayerFeed = {
  name: string;
  uuid: string;
};
export interface ScoreFeed {
  [key:string]: string;
};

export interface BoardScoreEvent {
    activeIndex: number;
    type: string;
}

export type RummyBoardType = {
  level: number;
  event: BoardScoreEvent;
  name: string;
  targetScore: string;
  noOfPlayers: string;
  players: PlayerFeed[];
  scores?: ScoreFeed[];
};
