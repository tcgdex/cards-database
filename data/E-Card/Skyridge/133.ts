import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Mystery Plate α",
		de: "Geheimnis-Schild α"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	attacks: [{
		name: {
			en: "Desert Burn",
			de: "Wüstenbrand"
		},

		effect: {
			en: "If your opponent has 5 or more Prizes, search your deck for a Trainer card, show it to your opponent, and put it into your hand. If your opponent has only 1 Prize, the Defending Pokémon is now Burned, Paralyzed, and Poisoned.",
			de: "Hat dein Gegner 5 oder mehr Preise, durchsuche dein Deck nach einer Trainerkarte, zeige sie deinem Gegner und nimm sie auf die Hand. Hat dein Gegner nur 1 Preis, ist das Verteidigende Pokémon jetzt verbrannt, gelähmt und vergiftet."
		},

		cost: ["Colorless"]
	}],

	effect: {
		en: "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Mystery Plate α.",
		de: "Lege diese Karte an 1 deiner Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seines eigenen verwenden. Lege am Ende deines Zuges das Geheimnis-Schild α auf deinen Ablagestapel."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87670,
				cardmarket: 275391
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87670,
				cardmarket: 275391
			},
		},
	]
}

export default card
