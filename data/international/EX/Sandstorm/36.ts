import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Elekid",
		'fr-fr': "Elekid",
		'de-de': "Elekid"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [239],

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
				'en-us': "Once during your turn (before your attack), you may put Electabuzz from your hand onto Elekid (this counts as evolving Elekid) and remove all damage counters from Elekid.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer Elektek de votre main sur Elekid (vous faites ainsi évoluer Elekid). Retirez à Elekid tous ses marqueurs de dégât.",
				'de-de': "Once during your turn (before your attack), you may put Electabuzz from your hand onto Elekid (this counts as evolving Elekid), and remove all damage counters from Elekid."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Gather Energy",
				'fr-fr': "Rassemblement d'énergie",
				'de-de': "Gather Energy"
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Énergie de base et attachez-la à un de vos Pokémon. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a basic Energy card and attach it to 1 your Pokémon. Shuffle your deck afterward."
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
				cardmarket: 275813,
				tcgplayer: 85169
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275813,
				tcgplayer: 85169
			}
		},
	],

}

export default card
