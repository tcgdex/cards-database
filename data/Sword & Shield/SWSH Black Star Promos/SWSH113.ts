import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "AKIRA EGAWA",
	category: "Pokemon",

	description: {
		en: "Its nictitating membranes let it pick out foes' weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3."
	},

	stage: "Stage2",

	name: {
		en: "Inteleon",
		fr: "Lézargus",
		de: "Intelleon",
		es: "Inteleon",
		pt: "Inteleon",
		it: "Inteleon"
	},

	rarity: "None",
	dexId: [818],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Drizzile",
		fr: "Arrozard",
		de: "Phlegleon",
		es: "Drizzile",
		pt: "Drizzile",
		it: "Drizzile"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Quick Shooting",
			fr: "Tir Rapide",
			de: "Schnellschütze",
			es: "Disparo Rápido",
			pt: "Gatilho Rápido",
			it: "Tiro Istantaneo"
		},

		effect: {
			en: "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			de: "Einmal während deines Zuges kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen.",
			es: "Una vez durante tu turno, puedes poner 2 contadores de daño en 1 de los Pokémon de tu rival.",
			pt: "Uma vez durante o seu turno, você poderá colocar 2 contadores de dano em 1 dos Pokémon do seu oponente.",
			it: "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Waterfall",
			fr: "Cascade",
			de: "Kaskade",
			es: "Cascada",
			pt: "Cachoeira",
			it: "Cascata"
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
