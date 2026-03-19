import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Elekid",
		fr: "Elekid",
		de: "Elekid"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		239,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Electabuzz from your hand onto Elekid (this counts as evolving Elekid) and remove all damage counters from Elekid.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer Elektek de votre main sur Elekid (vous faites ainsi évoluer Elekid). Retirez à Elekid tous ses marqueurs de dégât.",
				de: "Once during your turn (before your attack), you may put Electabuzz from your hand onto Elekid (this counts as evolving Elekid), and remove all damage counters from Elekid."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Gather Energy",
				fr: "Rassemblement d'énergie",
				de: "Gather Energy"
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Énergie de base et attachez-la à un de vos Pokémon. Ensuite, mélangez votre deck.",
				de: "Search your deck for a basic Energy card and attach it to 1 your Pokémon. Shuffle your deck afterward."
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

	thirdParty: {
		cardmarket: 275813,
		tcgplayer: 85169
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
