import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Elekid",
		'fr-fr': "Elekid",
		'de-de': "Elekid"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		239,
	],

	hp: 50,

	types: [
		"Lightning",
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
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Elektek de votre main sur Elekid (vous faites ainsi évoluer Elekid) et retirer à Elekid tous ses marqueurs de dégât.",
				'de-de': "Once during your turn (before your attack), you may put Electabuzz from your hand onto Elekid (this counts as evolving Elekid) and remove all damage counters from Elekid."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Magnetic Trip",
				'fr-fr': "Croche-pied magnétique",
				'de-de': "Magnetic Trip"
			},
			effect: {
				'en-us': "If Low Pressure System is in play, the Defending Pokémon is now Confused.",
				'fr-fr': "Si Système à basse pression est en jeu, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "If Low Pressure System is in play, the Defending Pokémon is now Confused."
			},
			damage: 10,

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
				tcgplayer: 85170,
				cardmarket: 276669
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85170,
				cardmarket: 276669
			},
		}
	],
}

export default card
