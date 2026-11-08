import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Minun",
		'fr-fr': "Negapi"
	},
	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [312],
	hp: 60,
	types: [
		"Lightning"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 2 cartes Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Tag Team Boost",
				'fr-fr': "Boost de groupe"
			},
			effect: {
				'en-us': "If Plusle is on your Bench, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Si Posipi se trouve sur votre Banc, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Exposure to electricity from Minun and Plusle promotes blood circulation and relaxes muscles."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275596,
				tcgplayer: 87492
			}
		},
	],

}

export default card
