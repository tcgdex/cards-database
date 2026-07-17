import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Rust Syndicate Grunt",
		fr: "Sbire du Clan Dérouillard",
		es: "Recluta del Clan Corrosión",
		'es-mx': "Recluta del Clan Corrosión",
		de: "Rüpel vom Corrosio-Clan"
	},

	illustrator: "Teeziro",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	effect: {
		en: "You can use this card only if any of your Pokémon were Knocked Out during your opponent's last turn. Discard 1 Energy from 1 of your opponent's Pokémon."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895897,
				tcgplayer: 704869
			}
		},
	],
}

export default card
