import { Card } from 'models/database/card'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		'en-us': "Pichu",
		'fr-fr': "Pichu"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [172],

	hp: 40,

	types: [
		"Lightning"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Baby Evolution",
				'fr-fr': "Évolution Bébé"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Pikachu de votre main sur Pichu (vous le faites ainsi évoluer) et retirer à Pichu tous ses marqueurs de dégât."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Find a Friend",
				'fr-fr': "Trouver un ami"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez un Pokémon dans votre deck. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	description: {
		'en-us': "It plays with others by touching tails and setting off sparks. This appears to be a test of courage.",
		'fr-fr': "Il prouve son courage en touchant la queue électrifiée de ses pairs."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88020,
				cardmarket: 278562
			},
		},
	],

}

export default card
