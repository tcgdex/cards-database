import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Cosmog"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [789],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	description: {
		en: "This Pokémon came from another universe. Its gaseous body is so light that even a gentle breeze can blow it away."
	},

	attacks: [{
		name: {
			en: "Splash"
		},

		cost: ["Colorless"],

		damage: 10,
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
			type: "normal",
			thirdParty: {
				cardmarket: 907685,
				tcgplayer: 716474
			}
		}
	],
}

export default card
