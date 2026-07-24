import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Mystery Plate β",
		de: "Geheimnis-Schild ß"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	attacks: [{
		name: {
			en: "Stone Crush",
			de: "Steinbrecher"
		},

		effect: {
			en: "If your opponent has 5 or more Prizes, draw 3 cards. If your opponent has only 1 Prize, choose 2 Energy cards attached to the Defending Pokémon (1 if there is only 1). Your opponent shuffles those cards into his or her deck.",
			de: "Hat dein Gegner 5 oder mehr Preise, ziehe 3 Karten. Hat dein Gegner nur 1 Preis, wähle 2 Energiekarten, die an das verteidigende Pokémon angelegt sind (1, falls es nur 1 hat). Dein Gegner mischt diese Karten in sein Deck."
		},

		cost: ["Colorless"]
	}],

	effect: {
		en: "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Mystery Plate β.",
		de: "Lege diese Karte an 1 deiner Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seines eigenen verwenden. Lege am Ende deines Zuges das Geheimnis-Schild ß auf deinen Ablagestapel."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87671,
				cardmarket: 275392
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87671,
				cardmarket: 275392
			},
		},
	]
}

export default card
