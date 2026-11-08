import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [818],
	set: Set,

	name: {
		'en-us': "Inteleon",
		'fr-fr': "Lézargus",
		'es-es': "Inteleon",
		'it-it': "Inteleon",
		'pt-br': "Inteleon",
		'de-de': "Intelleon"
	},

	illustrator: "NC Empire",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Drizzile",
		'fr-fr': "Arrozard",
		'es-es': "Drizzile",
		'it-it': "Drizzile",
		'pt-br': "Drizzile",
		'de-de': "Phlegleon"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Quick Shooting",
			'fr-fr': "Tir Rapide",
			'es-es': "Disparo Rápido",
			'it-it': "Tiro Istantaneo",
			'pt-br': "Gatilho Rápido",
			'de-de': "Schnellschütze"
		},

		effect: {
			'en-us': "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			'es-es': "Una vez durante tu turno, puedes poner 2 contadores de daño en 1 de los Pokémon de tu rival.",
			'it-it': "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario.",
			'pt-br': "Uma vez durante o seu turno, você poderá colocar 2 contadores de dano em 1 dos Pokémon do seu oponente.",
			'de-de': "Einmal während deines Zuges kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Waterfall",
			'fr-fr': "Cascade",
			'es-es': "Cascada",
			'it-it': "Cascata",
			'pt-br': "Cachoeira",
			'de-de': "Kaskade"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "Its nictitating membranes let it pick out foes' weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567123,
				tcgplayer: 241696
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567123,
				tcgplayer: 241696
			}
		},
	],
}

export default card
