import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [230],
	set: Set,

	name: {
		en: "Kingdra",
		fr: "Hyporoi",
		es: "Kingdra",
		it: "Kingdra",
		pt: "Kingdra",
		de: "Seedraking"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
		es: "Seadra",
		it: "Seadra",
		pt: "Seadra",
		de: "Seemon"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Seething Currents",
			fr: "Courants Bouillonnants",
			es: "Corrientes Turbulentas",
			it: "Correnti Tumultuose",
			pt: "Correntezas Furiosas",
			de: "Turbulente Strömung"
		},

		effect: {
			en: "Once during your turn, you may have either player shuffle their hand and put it on the bottom of their deck. If that player put any cards on the bottom of their deck in this way, they draw 4 cards.",
			fr: "Une fois pendant votre tour, vous pouvez choisir qu'un des joueurs mélange sa main, puis la place en dessous de son deck. Si ce joueur place au moins une carte en dessous de son deck de cette façon, il pioche 4 cartes.",
			es: "Una vez durante tu turno, puedes hacer que uno de los jugadores baraje las cartas de su mano y las ponga en la parte inferior de su baraja. Si ese jugador pone alguna carta en la parte inferior de su baraja de esta manera, robará 4 cartas.",
			it: "Una sola volta durante il tuo turno, puoi far rimischiare a uno dei giocatori le carte che ha in mano e metterle in fondo al proprio mazzo. Se quel giocatore ha messo delle carte in fondo al proprio mazzo in questo modo, quel giocatore pesca quattro carte.",
			pt: "Uma vez durante o seu turno, você poderá fazer com que qualquer um dos jogadores embaralhe a própria mão e coloque-a como as cartas de baixo do próprio baralho. Se aquele jogador colocou qualquer carta como a carta de baixo do próprio baralho desta forma, ele(a) comprará 4 cartas.",
			de: "Einmal während deines Zuges kannst du einen der beiden Spieler dazu veranlassen, seine Handkarten zu mischen und sie unter sein Deck zu legen. Wenn jener Spieler auf diese Weise mindestens 1 Karte unter sein Deck gelegt hat, zieht er 4 Karten."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
			es: "Hidroestallido",
			it: "Idrosplash",
			pt: "Hidroborrifada",
			de: "Hydroplatscher"
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	},

	thirdParty: {
		cardmarket: 670811,
		tcgplayer: 283911
	}
}

export default card
