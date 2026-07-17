import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Relicanth",
		fr: "Relicanth",
		es: "Relicanth",
		'es-mx': "Relicanth",
		de: "Relicanth"
	},

	illustrator: "Naoyo Kumura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [369],
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Fossil Beatdown"
		},

		cost: ["Colorless"],

		damage: "10+",

		effect: {
			en: "This attack does 30 more damage for each of your Benched Pokémon with \"Antique\" in its name."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895805,
				tcgplayer: 704774
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895805,
				tcgplayer: 704774
			}
		},
	],
}

export default card
