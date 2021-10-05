import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "AKIRA EGAWA",
	category: "Pokemon",

	description: {
		en: "Its nictitating membranes let it pick out foes’ weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3."
	},

	stage: "Stage2",

	name: {
		en: "Inteleon"
	},

	rarity: "None",
	dexId: [818],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Drizzile"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Quick Shooting"
		},

		effect: {
			en: "Once during your turn, you may put 2 damage counters on 1 of your opponent’s Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Waterfall"
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
	}
}

export default card