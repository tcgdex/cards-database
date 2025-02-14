import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Leafeon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "When you see Leafeon asleep in a patch of<br />sunshine, you'll know it is using photosynthesis<br />to produce clean air."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leafy Cyclone"
		},

		damage: 90,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Dialga]
}

export default card