import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Buneary",
		fr: "Laporeille",
		de: "Haspiror"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		427,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Drawup Power",
				fr: "Pouvoir bloquant",
				de: "Kraft aufziehen"
			},
			effect: {
				en: "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez une carte Énergie dans votre deck, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach 1 Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Extend Ears",
				fr: "Oreilles extensibles",
				de: "Lauscher ausfahren"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Benched Pokémon.",
				fr: "Retirez 1 marqueur de dégât à chacun des Pokémon de votre Banc.",
				de: "Entferne 1 Schadensmarke von jedem Pokémon auf deiner Bank."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278102,
		tcgplayer: 84039
	}
}

export default card
