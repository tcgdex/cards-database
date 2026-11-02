import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Team Galactic's Invention G-109 SP Radar",
		fr: "Radar SP Invention G-109 de Team Galaxie",
		de: "Team Galaktiks Erfindung G-109 SP Radar"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose a card from your hand and put it on top of your deck. Search your deck for a Pokémon SP, show it to your opponent, and put it into your hand. Shuffle your deck afterward. (If this is the only card in your hand, you can't play this card.)",
		fr: "Choisissez une carte dans votre main et placez-la au dessus de votre deck. Choisissez un Pokémon SP dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. (Si c'est la seule carte que vous avez en main, vous ne pouvez pas la jouer).",
		de: "Wähle 1 Karte von deiner Hand und lege sie auf dein Deck. Danach durchsuche dein Deck nach 1 Pokémon SP-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. (Wenn diese Karte die einzige Karte auf deiner Hand ist, kannst du sie nicht spielen.)"
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278670,
				tcgplayer: 89809
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278670,
				tcgplayer: 89809
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 450413,
				tcgplayer: 260886
			}
		},
		{
			type: "normal",
			stamp: ["tsubasa-nakamura"],
			thirdParty: {
				cardmarket: 869028,
				tcgplayer: 479962
			}
		},
		{
			type: "normal",
			stamp: ["stephen-silvestro"],
			thirdParty: {
				cardmarket: 869027,
				tcgplayer: 479963
			}
		},
		{
			type: "normal",
			stamp: ["yuta-komatsuda"],
			thirdParty: {
				cardmarket: 868815,
				tcgplayer: 480118
			}
		}
	],

}

export default card
