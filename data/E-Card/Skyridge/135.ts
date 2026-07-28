import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Mystery Plate γ",
		de: "Geheimes Schild γ"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Mystery Plate γ.",
		de: "Hat dein Gegner 5 oder mehr Preise, mische die Karten auf deiner Hand in dein Deck und ziehe anschließend 6 Karten. Hat dein Gegner 2 Preise, wähle 1 der entwickelten Pokémon deines gegners. Dein Gegner legt die oberste Karte dieser entwickelten Pokémon unter sein Deck. (Dies zählt als Rückentwickeln des Pokémon.)"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Retro Cave",
			},
			effect: {
				en: "If your opponent has 5 or more Prizes, shuffle your hand into your deck and then draw 6 cards. If your opponent has exactly 2 Prizes, choose 1 of your opponent's Evolved Pokémon. Your opponent puts the top card on that Evolved Pokémon on the bottom of his or her deck. (This counts as devolving that Pokémon.)",
			},
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87673,
				cardmarket: 275393
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87673,
				cardmarket: 275393
			},
		},
	]
}

export default card
