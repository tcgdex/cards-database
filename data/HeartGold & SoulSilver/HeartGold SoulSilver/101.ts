import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Professor Oak’s New Theory",
		fr: "Nouvelle théorie du Prof. Chen",
		de: "Professor Eichs neue Theorie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu’une carte Supporter à chaque tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon actif. Une fois votre tour terminé, défaussez-vous de cette carte.",
		en: "Shuffle your hand into your deck. Then, draw 6 cards.",
		de: "Mische deine Handkarten in dein Deck. Ziehe danach 6 Karten."
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
			foil: "professor-program",
		},
		{
			type: "normal",
			stamp : ["yuta-komatsuda"],
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
			stamp : ["igor-costa"],
		},
	],

	hp: 0
}

export default card
