import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Leafeon"
	},

	illustrator: "Ryota Murayama",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "When you see Leafeon asleep in a patch of\nsunshine, you'll know it is using photosynthesis\nto produce clean air."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leaf Blast"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			en: "This attack does 20 more damage for each {G} Energy attached to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card