import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Burmy Trash Cloak",
		fr: "Cheniti Cape Déchet",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		412,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Wear Cloak",
				fr: "Cape",
			},
			effect: {
				en: "Once during your turn (before your attack), if Burmy Trash Cloak is your Active Pokémon, you may search your discard pile for a basic Metal Energy card and attach it to Burmy Trash Cloak.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Cheniti Cape Déchet est votre Pokémon Actif, vous pouvez choisir dans votre pile de défausse une carte Énergie de base Metal et l'attacher à Cheniti Cape Déchet.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Trash Cloak Tackle",
				fr: "Charge cape déchet",
			},
			effect: {
				en: "If Burmy Trash Cloak has any Metal Energy attached to it, this attack does 10 damage plus 10 more damage.",
				fr: "Si Cheniti Cape Déchet possède de l'Énergie Metal, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
