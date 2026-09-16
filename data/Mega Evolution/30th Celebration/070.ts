import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Espeon"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [196],
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Solar Beatdown"
		},

		cost: ["Psychic", "Colorless"],

		damage: "30×",

		effect: {
			en: "This attack does 30 damage for each of your Pokémon in play."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907677,
				tcgplayer: 696834
			}
		}
	],
}

export default card
