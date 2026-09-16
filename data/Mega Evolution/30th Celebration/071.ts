import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Sylveon"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [700],
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Colorful Harmony"
		},

		cost: ["Psychic", "Colorless", "Colorless"],

		damage: "50×",

		effect: {
			en: "This attack does 50 damage for each type of Basic Energy attached to all of your Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907678,
				tcgplayer: 696677
			}
		}
	],
}

export default card
