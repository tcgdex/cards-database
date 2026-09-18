import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "This Pokémon came from another universe. Its gaseous body is so light that even a gentle breeze can blow it away."
	},

	name: {
		en: "Cosmog",
		fr: "Cosmog",
		de: "Cosmog",
		es: "Cosmog",
		it: "Cosmog",
		'es-mx': "Cosmog"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [789],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Splash",
			fr: "Trempette",
			de: "Platscher",
			es: "Salpicadura",
			it: "Splash",
			'es-mx': "Salpicadura"
		},

		damage: 10,
		cost: ["Colorless"]
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