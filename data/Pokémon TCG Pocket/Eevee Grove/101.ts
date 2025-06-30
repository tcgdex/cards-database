import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Arbok"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Ekans"
	},

	description: {
		en: "The latest research has determined that there\nare over 20 possible arrangements of the\npatterns on its stomach."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Corner"
		},

		damage: 60,
		cost: ["Darkness", "Colorless"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card