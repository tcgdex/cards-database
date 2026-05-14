import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Mystery Plate Gamma",
		de: "Geheimes Schild (Gamma)"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Mystery Plate γ.",
		de: "Hat dein Gegner 5 oder mehr Preise, mische die Karten auf deiner Hand in dein Deck und ziehe anschließend 6 Karten. Hat dein Gegner 2 Preise, wähle 1 der entwickelten Pokémon deines gegners. Dein Gegner legt die oberste Karte dieser entwickelten Pokémon unter sein Deck. (Dies zählt als Rückentwickeln des Pokémon.)"
	},

	thirdParty: {
		cardmarket: 275393,
		tcgplayer: 87673
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
