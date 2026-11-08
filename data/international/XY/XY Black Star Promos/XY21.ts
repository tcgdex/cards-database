import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
	},

	illustrator: "match",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Metal Links",
				'fr-fr': "Liens Métalliques",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Metal Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Metal de votre pile de défausse à l'un de vos Pokémon de Banc.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncement",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "−20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "In ages past, this Pokémon was revered as a bringer of rain. It was found buried in the ground.",
	},

	thirdParty: {
		cardmarket: 848304
	}
}

export default card
