var ElTableroPGN = '[White "El Tablero"]';
var ElTableroCFG = { position: '8/8/8/8/8/8/8/8 w - - 0 1', pgn: ElTableroPGN, boardSize: '240px', pieceStyle: 'chesscom', theme: 'chesscom', size: '237px' };
var board = pgnView('ElTableroBoard', ElTableroCFG);

var PosicionInicialPGN = '[White "Posicion Inicial"]';
var PosicionInicialCFG = { position: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', pgn: PosicionInicialPGN, boardSize: '240px', pieceStyle: 'chesscom', theme: 'chesscom', size: '237px' };
board = pgnView('PosicionInicialBoard', PosicionInicialCFG);

var LasPiezasPGN = '[White "Las Piezas"] {Peon}1.g4 Kg1 2.g5 Kh1 3.gxh6 Kg1 { Torre } 4.Rxf7 Kh1 5.Rxh7 Kg1 { Alfil } 6.Bg4 Kh1 7.Bxe6 Kg1 { Caballo } 8.Nxe4 Kh1 9.Nxd6 Kg1 10.Nxb7 Kh1 { Reina } 11.Qxc4 Kg1 12.Qxa6 Kh1 { Rey } 13.Kxb3 Kg1 14.Kc4  *';
var LasPiezasCFG = { position: '8/1p3p1p/p2pp2p/8/2p1p3/1p6/1KQNBRP1/7k w - - 0 1', pgn: LasPiezasPGN, boardSize: '240px', pieceStyle: 'chesscom', theme: 'chesscom', size: '237px' };
board = pgnView('LasPiezasBoard', LasPiezasCFG);

var EnroquePGN = '[White "El Enroque (Castling)"] 1.O-O {Enroque por Flanco del Rey} O-O-O {Enroque por Flanco de la Reina} *';
var EnroqueCFG = { position: 'r3k3/8/8/8/8/8/8/4K2R w KQkq - 0 1', pgn: EnroquePGN, boardSize: '240px', pieceStyle: 'chesscom', theme: 'chesscom', size: '237px' };
board = pgnView('EnroqueBoard', EnroqueCFG);

var CapturaalPasoPGN = '[White "Captura al Paso (En Passant)"] 1. d5 e5 2. dxe6 *';
var CapturaalPasoCFG = { position: '8/ppp1p1pp/8/8/3P4/8/PPP1PPPP/8 w - - 0 1', pgn: CapturaalPasoPGN, boardSize: '240px', pieceStyle: 'chesscom', theme: 'chesscom', size: '237px' };
board = pgnView('CapturaalPasoBoard', CapturaalPasoCFG);

var PromocionPGN = '[White "Promocion (Promotion)"] 1.d8=Q c1=R 2.f8=B e1=N  *';
var PromocionCFG = { position: 'K7/3P1P2/8/8/8/8/2p1p3/7k w - - 0 1', pgn: PromocionPGN, boardSize: '240px', pieceStyle: 'chesscom', theme: 'chesscom', size: '237px' };
board = pgnView('PromocionBoard', PromocionCFG);
