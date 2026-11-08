import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Azurill",
		'fr-fr': "Azurill",
		'de-de': "Azurill"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [298],

	hp: 40,

	types: [
		"Colorless"
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
				'en-us': "Once during your turn (before your attack), you may put Marill from your hand onto Azurill (this counts as evolving Azurill), and remove all damage counters from Azurill.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer Marill de votre main sur Azurill (vous faites ainsi évoluer Azurill). Retirez à Azurill tous ses marqueurs de dégât.",
				'de-de': "Once during your turn (before your attack), you may put Marill from your hand onto Azurill (this counts as evolving Azurill), and remove all damage counters from Azurill."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Jump Catch",
				'fr-fr': "Attraper au vol",
				'de-de': "Jump Catch"
			},
			effect: {
				'en-us': "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
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
				cardmarket: 275808,
				tcgplayer: 83688
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275808,
				tcgplayer: 83688
			}
		},
	],

}

export default card
