import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Fisherman",
		fr: "Pêcheur",
		de: "Angler"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu’une carte Supporter à chaque tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon actif. Une fois votre tour terminé, défaussez-vous de cette carte.",
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your discard pile for 4 basic Energy cards, show them to your opponent, and put them into your hand.",
		de: "Durchsuche deinen Ablagestapel nach 4 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand."
	},

	trainerType: "Supporter",

	hp: 0,

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85472,
				cardmarket: 279064
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85472,
				cardmarket: 279064
			}
		},
		{
			type: "normal",
			stamp: ["david-cohen"],
			thirdParty: {
				tcgplayer: 480404,
				cardmarket: 279064
			}
		},
	],

}

export default card
