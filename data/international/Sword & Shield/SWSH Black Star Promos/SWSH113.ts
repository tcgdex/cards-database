import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "AKIRA EGAWA",
	category: "Pokemon",

	description: {
		'en-us': "Its nictitating membranes let it pick out foes' weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3."
	},

	stage: "Stage2",

	name: {
		'en-us': "Inteleon",
		'fr-fr': "Lézargus",
		'de-de': "Intelleon",
		'es-es': "Inteleon",
		'pt-br': "Inteleon",
		'it-it': "Inteleon"
	},

	rarity: "Promo",
	dexId: [818],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Drizzile",
		'fr-fr': "Arrozard",
		'de-de': "Phlegleon",
		'es-es': "Drizzile",
		'pt-br': "Drizzile",
		'it-it': "Drizzile"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Quick Shooting",
			'fr-fr': "Tir Rapide",
			'de-de': "Schnellschütze",
			'es-es': "Disparo Rápido",
			'pt-br': "Gatilho Rápido",
			'it-it': "Tiro Istantaneo"
		},

		effect: {
			'en-us': "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			'de-de': "Einmal während deines Zuges kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen.",
			'es-es': "Una vez durante tu turno, puedes poner 2 contadores de daño en 1 de los Pokémon de tu rival.",
			'pt-br': "Uma vez durante o seu turno, você poderá colocar 2 contadores de dano em 1 dos Pokémon do seu oponente.",
			'it-it': "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Waterfall",
			'fr-fr': "Cascade",
			'de-de': "Kaskade",
			'es-es': "Cascada",
			'pt-br': "Cachoeira",
			'it-it': "Cascata"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 450618
	}
}

export default card
