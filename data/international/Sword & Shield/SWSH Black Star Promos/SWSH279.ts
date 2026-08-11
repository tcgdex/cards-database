import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [818],
	set: Set,

	name: {
		'fr-fr': "Lézargus",
		'de-de': "Intelleon",
		'es-es': "Inteleon",
		'pt-br': "Inteleon",
		'it-it': "Inteleon",
		'en-us': "Inteleon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Arrozard",
		'de-de': "Phlegleon",
		'es-es': "Drizzile",
		'pt-br': "Drizzile",
		'it-it': "Drizzile",
		'en-us': "Drizzile"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Tir Rapide",
			'de-de': "Schnellschütze",
			'es-es': "Disparo Rápido",
			'pt-br': "Gatilho Rápido",
			'it-it': "Tiro Istantaneo",
			'en-us': "Quick Shooting"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			'de-de': "Einmal während deines Zuges kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen.",
			'es-es': "Una vez durante tu turno, puedes poner 2 contadores de daño en 1 de los Pokémon de tu rival.",
			'pt-br': "Uma vez durante o seu turno, você poderá colocar 2 contadores de dano em 1 dos Pokémon do seu oponente.",
			'it-it': "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario.",
			'en-us': "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Cascade",
			'de-de': "Kaskade",
			'es-es': "Cascada",
			'pt-br': "Cachoeira",
			'it-it': "Cascata",
			'en-us': "Waterfall"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "Its nictitating membranes let it pick out foes' weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3.",
	},

	thirdParty: {
		cardmarket: 566761
	}
}

export default card
