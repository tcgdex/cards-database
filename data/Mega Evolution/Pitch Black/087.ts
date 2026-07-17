import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.",
		de: "Seine Brust-, Rücken- und Schwanzflossen bewegen sich anmutig. Daher nennt man es den „Wassertänzer\"."
	},

	name: {
		en: "Goldeen",
		fr: "Poissirène",
		es: "Goldeen",
		'es-mx': "Goldeen",
		de: "Goldini"
	},

	illustrator: "Gemi",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [118],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Pierce",
			de: "Durchbohren"
		},

		cost: ["Colorless", "Colorless"],

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895871,
				tcgplayer: 704844
			}
		},
	],
}

export default card
