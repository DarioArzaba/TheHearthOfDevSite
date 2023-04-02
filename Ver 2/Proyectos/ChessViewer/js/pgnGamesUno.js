var TenedorPGN = '[Event "URS-ch24"]\[Site "Moscow"]\[Date "1957.01.24"]\[Round "15"]\[White "Tal"]\[Black "vs Klaman"]\[Result "1-0"]\ 1. e4 c5 {Defensa Siciliana} 2.Nf3 Nc6 3.d4 cxd4  {Abierta} 4. Nxd4 Nf6 {Clasica} 5. Nc3 d6 {Richter-Rauzer} 6. Bg5 Bd7 {Variacion Moderna} 7. Qd2 {Intercambio} Nxd4 8. Qxd4 Qa5 9. Bxf6 gxf6 {Desarrollo} 10. O-O-O Rc8 11. f4 Rg8 12. g3 e6 13. Bh3 Qc5 14. Qd2 b5 15. Rhe1 b4 16. Ne2 Qc4 17. Kb1 Qxe4$2 18. Nd4 Qb7 19. Qd3 Be7 20. Qxh7$1 Rf8 21. Bg4 Qc7 22. Ka1 f5 {Ataque} 23. Bxf5 exf5 24. Rxe7+ Kxe7 25. Re1+ Kd8 26. Qh4+ f6 27. Qh6 Qa5 28. Nb3$1 Qd5 29. Qxf8+ Kc7 30. Qxf6 Re8 31. Rc1 Ba4 32. Qd4 Qb7 33.Rd1 Re6 34.Qc4+ {Klaman Renuncia al Percatarse del Siguiente Tenedor Familiar} ( 34. Qc4+ Kd7 35. Nc5+$3 ) 1-0';
var TenedorCFG = { fen: 'start', pgn: TenedorPGN, boardSize: '300px', pieceStyle: 'chesscom', theme: 'chesscom', scrollable: true, movesHeight: '330', size: '550px' };
board = pgnView('TenedorBoard', TenedorCFG);

var PinchoPGN = '[Event "Leningrad ch-City"]\ [Date "1954"]\ [Result "0-1"]\ [White "Vasily Byvshev"]\ [Black "vs Alexander Kazimirovich"]\  1. e4 c5 {Defensa Siciliana} 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 {Najdorf, Inicia Desarrollo} 6. Bg5 Nbd7 7. Bc4 g6 8. h4 Bg7 9. Qd2 O-O 10. O-O-O Ne5 11. Bb3 Nc6 12. Nxc6 bxc6 {Ataque Blancas} 13. h5 Nxh5 14. g4 Nf6 15. Bh6 Bh8 16. g5 Nd7 17. Bxf8 Qxf8 {Contrataque Negras} 18. f4 Nc5 19. Rh4 h5 20. gxh6 Kh7 21. Rg1 Bf6 22. Rh2 a5 23. Qe3 a4 24. Bc4 Rb8 25. e5 Bh8 26. Bd3 Qd8 27. Qg3 Nxd3+ 28. cxd3 dxe5 29. fxe5 a3 30. Qe3 Bf5 31. d4 c5 32. d5 axb233. Rxb2 Rxb2 34. Kxb2 Qb8+ 35. Ka1 Bxe5 36. Qxc5 {Despues del contrataque las negras pinchan a la reina blanca} Qa7$3 {Notece que si (37. Qxa7) entonces 37... Bxc3#} 0-1';
var PinchoCFG = { fen: 'start', pgn: PinchoPGN, boardSize: '300px', pieceStyle: 'chesscom', theme: 'chesscom', scrollable: true, movesHeight: '330', size: '550px' };
board = pgnView('PinchoBoard', PinchoCFG);

var ClavadaPGN = '[Event "Thematic Tourney"]\ [Site "Washington DC"]\ [Date "1984.06.01"]\ [Result "1-0"]\ [White "Moore"]\ [Black "vs Donald Flournoy"]\ 1. e4 c5 {Defensa Siciliana} 2. d4 {Smith-Morra Gambit} cxd4 3. c3 dxc3 {Acceptado, Inicia Desarrollo} 4. Nxc3 d6 5. Nf3 e6 6. Bc4 a6 7. O-O b5 8. Bb3 Ra7 9. Qe2 Nc6 10. Be3 Rd7 11. Nxb5 axb5 12. Qxb5  Bb7 13. Ba4$3 {Increible clavada de las Blancas} Qa8 14. Rfc1 Nge7 15. Nd4 {Las blancas ponen toda la presion en c6 y d7} Rc7 16. Rc3 g6 17. Rac1 Kd7 18. e5 d5 19. Bg5 Bh6 20. Bxh6 Rhc8 21. Qb4 {Por intentar protejer a la pieza clavada las negras terminan en una terrible posicion} Kd8 22. Bxc6 Bxc6 23. Bg5 {Las negras estan en desventaja} ( 23. Bg5 Rb7 24. Rxc6 Rxc6 25. Nxc6+ Kd7 26. Qxe7+ Kc8 27. Qd8#) 1-0';
var ClavadaCFG = { fen: 'start', pgn: ClavadaPGN, boardSize: '300px', pieceStyle: 'chesscom', theme: 'chesscom', scrollable: true, movesHeight: '330', size: '550px' };
board = pgnView('ClavadaBoard', ClavadaCFG);


/*

var EliminarDefensaPGN = '';
var EliminarDefensaCFG = {fen: 'start', pgn: EliminarDefensaPGN, boardSize: '300px', pieceStyle: 'chesscom', theme: 'chesscom', scrollable: true, movesHeight: '330', size: '550px' };
board = pgnView('EliminarDefensaBoard', EliminarDefensaCFG);

var AtaqueDescubiertoPGN = '';
var AtaqueDescubiertoCFG = {fen: 'start', pgn: AtaqueDescubiertoPGN, boardSize: '300px', pieceStyle: 'chesscom', theme: 'chesscom', scrollable: true, movesHeight: '330', size: '550px' };
board = pgnView('AtaqueDescubiertoBoard', AtaqueDescubiertoCFG);

var BateriaPGN = '';
var BateriaCFG = {fen: 'start', pgn: BateriaPGN, boardSize: '300px', pieceStyle: 'chesscom', theme: 'chesscom', scrollable: true, movesHeight: '330', size: '550px' };
board = pgnView('BateriaBoard', BateriaCFG);

var SobrecargaPGN = '';
var SobrecargaCFG = {fen: 'start', pgn: SobrecargaPGN, boardSize: '300px', pieceStyle: 'chesscom', theme: 'chesscom', scrollable: true, movesHeight: '330', size: '550px' };
board = pgnView('SobrecargaBoard', SobrecargaCFG);

var DesviacionPGN = '';
var DesviacionCFG = {fen: 'start', pgn: DesviacionPGN, boardSize: '300px', pieceStyle: 'chesscom', theme: 'chesscom', scrollable: true, movesHeight: '330', size: '550px' };
board = pgnView('DesviacionBoard', DesviacionCFG);

var InterferenciaPGN = '';
var InterferenciaCFG = {fen: 'start', pgn: InterferenciaPGN, boardSize: '300px', pieceStyle: 'chesscom', theme: 'chesscom', scrollable: true, movesHeight: '330', size: '550px' };
board = pgnView('InterferenciaBoard', InterferenciaCFG);

var RayosXPGN = '';
var RayosXCFG = {fen: 'start', pgn: RayosXPGN, boardSize: '300px', pieceStyle: 'chesscom', theme: 'chesscom', scrollable: true, movesHeight: '330', size: '550px' };
board = pgnView('RayosXBoard', RayosXCFG);

var JugadaIntermediaPGN = '';
var JugadaIntermediaCFG = {fen: 'start', pgn: JugadaIntermediaPGN, boardSize: '300px', pieceStyle: 'chesscom', theme: 'chesscom', scrollable: true, movesHeight: '330', size: '550px' };
board = pgnView('JugadaIntermediaBoard', JugadaIntermediaCFG);

*/