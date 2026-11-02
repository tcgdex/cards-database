import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Dustox",
		fr: "Papinox"
	},

	illustrator: "Midori Harada",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [269],
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys"
	},

	description: {
		en: "It violently flutters its wings to scatter toxic dust\nwhen attacked. It becomes active after sunset."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Select Powder",
			fr: "Poudre Select"
		},

		damage: 60,
		cost: ["Grass"],

		effect: {
			en: "Choose either Poisoned or Confused. Your opponent's Active Pokémon is now affected by that Special Condition.",
			fr: "Choisissez entre Empoisonné et Confus. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card