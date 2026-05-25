import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886486,
				tcgplayer: 693546
			}
		},
	],

	name: {
		en: "Sliggoo"
	},

	illustrator: "aspara",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [705],
	hp: 90,
	types: ["Dragon"],

	evolveFrom: {
		en: "Goomy"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gentle Slap"
		},

		cost: ["Water", "Psychic"],
		damage: 70
	}],

	retreat: 3,
	regulationMark: "J",
}

export default card