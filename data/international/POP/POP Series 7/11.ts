import { Card } from 'models/database/card'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		'en-us': "Burmy Plant Cloak",
		'fr-fr': "Burmy Plant Cloak"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [412],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Wear Cloak",
				'fr-fr': "Cape"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Burmy Plant Cloak is your Active Pokémon, you may search your discard pile for a basic Grass Energy card and attach it to Burmy Plant Cloak.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Cheniti Cape Plante est votre Pokémon Actif, vous pouvez choisir dans votre pile de défausse une carte Énergie de base  et l'attacher à Cheniti Cape Plante."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Plant Cloak Tackle",
				'fr-fr': "Charge cape plante"
			},
			effect: {
				'en-us': "If Burmy Plant Cloak has any Grass Energy attached to it, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Si Cheniti Cape Plante possède de l'Énergie , cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	description: {
		'en-us': "To shelter itself from cold, wintry winds, it covers itself with a cloak made of twigs and leaves."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84050,
				cardmarket: 278043
			},
		},
	],

}

export default card
