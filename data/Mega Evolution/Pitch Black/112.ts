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
		en: "You can use this card only if any of your Pokémon were Knocked Out during your opponent's last turn. Discard 1 Energy from 1 of your opponent's Pokémon.",
		de: "Du kannst diese Karte nur einsetzen, wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners kampfunfähig wurde.\n\nLege 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel.\n\nDu kannst während deines Zuges nur 1 Unterstützerkarte spielen."
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
