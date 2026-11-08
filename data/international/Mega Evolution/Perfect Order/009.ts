import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [666],

	name: {
		'en-us': "Vivillon",
		'fr-fr': "Prismillon",
		'es-es': "Vivillon",
		'es-mx': "Vivillon",
		'de-de': "Vivillon",
		'it-it': "Vivillon",
		'pt-br': "Vivillon"
	},

	evolveFrom: {
		'en-us': "Spewpa",
		'fr-fr': "Pérégrain",
		'es-es': "Spewpa",
		'es-mx': "Spewpa",
		'de-de': "Puponcho",
		'it-it': "Spewpa",
		'pt-br': "Spewpa",
	},

	illustrator: "mingo",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Grand Wing",
			'fr-fr': "Aile Grandiose",
			'es-es': "Ala Colosal",
			'es-mx': "Ala Colosal",
			'de-de': "Gewaltige Flügel",
			'it-it': "Ala Imponente",
			'pt-br': "Asa Grandiosa"
		},

		effect: {
			'en-us': "Once during your turn, you may use this Ability. Your opponent shuffles their hand and puts it on the bottom of their deck. If they put any cards on the bottom of their deck in this way, they draw 4 cards.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez utiliser ce talent. Votre adversaire mélange sa main, puis la place en dessous de son deck. Si au moins une carte est placée en dessous de son deck de cette façon, votre adversaire pioche 4 cartes.",
			'es-es': "Una vez durante tu turno, puedes usar esta habilidad. Tu rival baraja las cartas de su mano y las pone en la parte inferior de su baraja. Si pone alguna carta en la parte inferior de su baraja de esta manera, tu rival roba 4 cartas.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Tu rival baraja su mano y la pone en la parte inferior de su mazo. Si puso alguna carta en la parte inferior de su mazo de esta manera, tu rival roba 4 cartas.",
			'de-de': "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Dein Gegner mischt seine Handkarten und legt sie unter sein Deck. Wenn er auf diese Weise mindestens 1 Karte unter sein Deck gelegt hat, zieht er 4 Karten.",
			'it-it': "Una sola volta durante il tuo turno, puoi usare questa abilità. Il tuo avversario rimischia le carte che ha in mano e le mette in fondo al proprio mazzo. Se mette delle carte in fondo al proprio mazzo in questo modo, il tuo avversario pesca quattro carte.",
			'pt-br': "Uma vez durante o seu turno, você poderá usar esta Habilidade. Seu oponente embaralha a mão dele e a coloca como as cartas de baixo do baralho dele. Se o seu oponente colocar quaisquer cartas como as cartas de baixo do baralho dele desta forma, ele comprará 4 cartas."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Blow Through",
			'fr-fr': "Grosse Bourrasque",
			'es-es': "Gran Torbellino",
			'es-mx': "Soplo Intenso",
			'de-de': "Durchdringender Strahl",
			'it-it': "Colposecco",
			'pt-br': "Sopro Intenso"
		},

		effect: {
			'en-us': "If a Stadium is in play, this attack does 60 more damage.",
			'fr-fr': "Si un Stade est en jeu, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Si hay un Estadio en juego, este ataque hace 60 puntos de daño más.",
			'es-mx': "Si hay un Estadio en juego, este ataque hace 60 puntos de daño más.",
			'de-de': "Wenn ein Stadion im Spiel ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'it-it': "Se c'è una carta Stadio in gioco, questo attacco infligge 60 danni in più.",
			'pt-br': "Se um Estádio estiver em jogo, este ataque causará 60 pontos de dano a mais."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684366,
				cardmarket: 877421
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684366,
				cardmarket: 877421
			}
		}
	],

}

export default card
