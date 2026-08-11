import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Celio's Network",
		'fr-fr': "Le réseau de Cileo",
		'de-de': "Celios Netzwerk"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for a Basic Pokémon or Evolution card (excluding Pokémon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		'fr-fr': "Choisissez dans votre deck un Pokémon de base ou une carte Évolution (Pokémon-ex exclus). Montrez-le (ou la) à votre adversaire et placez-le (ou la) dans votre main. Ensuite, mélangez votre deck.",
		'de-de': "Durchsuche dein Deck nach einer Basis-Pokémon-Karte oder einer Evolutionskarte (kein Pokémon-ex), zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach.",
	},

	thirdParty: {
		cardmarket: 277154,
		tcgplayer: 84156
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["akira-miyazaki"]
		},
		{
			type: "normal",
			stamp: ["akira-miyazaki"]
		},
		{
			type: "normal",
			stamp: ["paul-atanassov"]
		},
		{
			type: "normal",
			stamp: ["dylan-lefavour"]
		},
		{
			type: "normal",
			stamp: ["tristan-robinson"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		}
	]
}

export default card
