import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Pokémon Collector",
		fr: "Collectionneur de Pokémon",
		de: "Pokémon-Sammler"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu’une carte Supporter à chaque tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon actif. Une fois votre tour terminé, défaussez-vous de cette carte.",
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 3 Basic Pokémon, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		de: "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon-Karten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88217,
				cardmarket: 279069
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88217,
				cardmarket: 279069
			}
		},
		{
			type: "reverse",
			foil: 'league',
			thirdParty: {
				tcgplayer: 220369,
				cardmarket: 450098
			}
		},
		{
			type: "normal",
			stamp : ["mychael-bryan"],
			thirdParty: {
				tcgplayer: 480093
			}
		},
		{
			type: "normal",
			stamp : ["yuta-komatsuda"],
			thirdParty: {
				tcgplayer: 480094
			}
		},
		{
			type: "normal",
			stamp : ["yuka-furusawa"],
			thirdParty: {
				tcgplayer: 480095
			}
		},
		{
			type: "normal",
			stamp : ["gustavo-wada"],
			thirdParty: {
				tcgplayer: 480438
			}
		},
		{
			type: "normal",
			stamp : ["christopher-kan"],
			thirdParty: {
				tcgplayer: 480440
			}
		},
		{
			type: "normal",
			stamp : ["ross-cawthorn"],
			thirdParty: {
				tcgplayer: 480441
			}
		},
		{
			type: "normal",
			stamp : ["david-cohen"],
			thirdParty: {
				tcgplayer: 480442
			}
		},
	],

}

export default card
