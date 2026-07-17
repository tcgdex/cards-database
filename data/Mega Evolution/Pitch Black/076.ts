import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Fossil Quarry",
		fr: "Carrière Fossile",
		es: "Cantera de Fósiles",
		'es-mx': "Cantera de Fósiles",
		de: "Fossiliengrube"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",
	regulationMark: "J",

	effect: {
		en: "Once during each player's turn, that player may search their deck for up to 2 Trainer cards with \"Antique\" in their name and put them onto their Bench. Then, that player shuffles their deck.",
		de: "Einmal während des Zuges jedes Spielers kann jener Spieler sein Deck nach bis zu 2 Itemkarten durchsuchen, bei denen „Antikes\" oder „Antiker\" zum Namen gehört, und sie auf seine Bank legen. Jener Spieler mischt anschließend sein Deck.\n\nDu kannst während deines Zuges nur 1 Stadionkarte spielen. Lege sie neben die Aktive Position, und lege sie auf den Ablagestapel, wenn ein anderes Stadion ins Spiel kommt. Ein Stadion mit demselben Namen kann nicht gespielt werden."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895860,
				tcgplayer: 704833
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895860,
				tcgplayer: 704833
			}
		},
	],
}

export default card
