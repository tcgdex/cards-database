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
		en: "Search your deck for up to 3 Basic Pokémon, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		de: "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon-Karten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		},
		{
			type: "reverse",
			stamp: ["player-rewards-program"]
		},
		{
			type: "normal",
			stamp : ["mychael-bryan"],
		},
		{
			type: "normal",
			stamp : ["yuta-komatsuda"],
		},
		{
			type: "normal",
			stamp : ["yuka-furusawa"],
		},
		{
			type: "normal",
			stamp : ["gustavo-wada"],
		},
		{
			type: "normal",
			stamp : ["christopher-kan"],
		},
		{
			type: "normal",
			stamp : ["ross-cawthorn"],
		},
		{
			type: "normal",
			stamp : ["david-cohen"],
		}
	],

	thirdParty: {
		cardmarket: 279069
	}
}

export default card
