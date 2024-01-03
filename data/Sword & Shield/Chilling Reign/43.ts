import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Inteleon",
		fr: "Lézargus",
		es: "Inteleon",
		it: "Inteleon",
		pt: "Inteleon",
		de: "Intelleon"
	},

	illustrator: "NC Empire",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Drizzile",
		fr: "Arrozard",
		es: "Drizzile",
		it: "Drizzile",
		pt: "Drizzile",
		de: "Phlegleon"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Quick Shooting",
			fr: "Tir Rapide",
			es: "Disparo Rápido",
			it: "Tiro Istantaneo",
			pt: "Gatilho Rápido",
			de: "Schnellschütze"
		},

		effect: {
			en: "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			es: "Una vez durante tu turno, puedes poner 2 contadores de daño en 1 de los Pokémon de tu rival.",
			it: "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario.",
			pt: "Uma vez durante o seu turno, você poderá colocar 2 contadores de dano em 1 dos Pokémon do seu oponente.",
			de: "Einmal während deines Zuges kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen."
		}
	}],

	attacks: [{
		name: {
			en: "Waterfall",
			fr: "Cascade",
			es: "Cascada",
			it: "Cascata",
			pt: "Cachoeira",
			de: "Kaskade"
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

	variants: {
		normal: false,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "Its nictitating membranes let it pick out foes' weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3."
	}
}

export default card
