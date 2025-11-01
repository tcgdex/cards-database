import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ampharos",
		fr: "Pharamp"
	},

	illustrator: "Whisker",
	rarity: "One Star",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		en: "Flaaffy"
	},

	description: {
		en: "The bright light on its tail can be seen far\naway. It has been treasured since ancient\ntimes as a beacon.",
		fr: "La lumière vive sur sa queue est visible de loin. Les êtres humains le tiennent en haute estime, car sa lumière les guide depuis les temps anciens."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Thunder Punch",
			fr: "Poing Éclair"
		},

		damage: 80,
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage. If tails, this Pokémon also does 20 damage to itself.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts de plus. Si c'est pile, ce Pokémon s'inflige aussi 20 dégâts."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card