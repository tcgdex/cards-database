import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Lilligant",
		fr: "Fragilady"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Crown",
	category: "Pokemon",

	dexId: [549],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule"
	},

	description: {
		en: "No matter how much time and money is spent\nraising it, its flowers are the most beautiful when\nthey bloom in the wild."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Toughness Aroma",
			fr: "Arôme d'Endurance"
		},

		effect: {
			en: "Each of your {G} Pokémon gets +20 HP.",
			fr: "Chacun de vos Pokémon {G} reçoit + 20 PV."
		}
	}],

	attacks: [{
		name: {
			en: "Smack",
			fr: "Claque"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card