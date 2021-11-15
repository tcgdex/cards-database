import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Nidoran♀",
		fr: "Nidoran ♀"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		29,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Look for Friends",
				fr: "À la recherche d'amis"
			},
			effect: {
				en: "Reveal cards from your deck until you reveal a Basic Pokémon. Show that card to your opponent and put it into your hand. Shuffle the other revealed cards into your deck. (If you don't reveal a Basic Pokémon, shuffle all the revealed cards back into your deck.)",
				fr: "Retournez des cartes de votre deck jusqu'à ce que vous trouviez un Pokémon de base. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez à votre deck les autres cartes retournées. (Si vous ne trouvez pas de Pokémon de base, mélangez à votre deck toutes les cartes retournées.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
