import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Pichu",
		'fr-fr': "Pichu",
		'de-de': "Pichu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
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
				'fr-fr': "Évolution bébé",
				'de-de': "Baby Evolution"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer Pikachu de votre main sur Pichu (vous faites ainsi évoluer Pichu). Retirez à Pichu tous ses marqueurs de dégât.",
				'de-de': "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Energy Retrieval",
				'fr-fr': "Énergie retrouvée",
				'de-de': "Energy Retrieval"
			},
			effect: {
				'en-us': "Search your discard pile for up to 2 basic Energy cards and attach them to 1 of your Pokémon. Put 1 damage counter on that Pokémon for each Energy card attached in this way.",
				'fr-fr': "Choisissez dans votre pile de défausse jusqu'à deux cartes Énergie de base et attachez-les à un de vos Pokémon. Placez un marqueur de dégât sur ce Pokémon pour chaque carte Énergie que vous lui attachez de cette façon.",
				'de-de': "Search your discard pile for up to 2 basic Energy cards and attach them to 1 of your Pokémon. Put 1 damage counter on that Pokémon for each Energy card attached in this way."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275797,
				tcgplayer: 88012
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275797,
				tcgplayer: 88012
			}
		},
	],

}

export default card
