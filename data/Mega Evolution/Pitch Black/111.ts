import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Misty's Vitality",
		fr: "Vitalité d'Ondine",
		es: "Vitalidad de Misty",
		'es-mx': "Vitalidad de Misty",
		de: "Mistys Vitalität"
	},

	illustrator: "En Morikura",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	effect: {
		en: "Search your deck for up to 4 Basic Water Energy and attach them to 1 of your Pokémon, then shuffle your deck. Your turn ends."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895896,
				tcgplayer: 704868
			}
		},
	],
}

export default card
