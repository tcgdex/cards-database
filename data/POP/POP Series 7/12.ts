import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Burmy Sandy Cloak",
		fr: "Burmy Sandy Cloak"
	},

	illustrator: "Midori Harada",
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
				fr: "Cape"
			},
			effect: {
				en: "Once during your turn (before your attack), if Burmy Sandy Cloak is your Active Pokémon, you may search your discard pile for a basic Fighting Energy card and attach it to Burmy Sandy Cloak.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Cheniti Cape Sable est votre Pokémon Actif, vous pouvez choisir dans votre pile de défausse une carte Énergie de base  et l'attacher à Cheniti Cape Sable."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sandy Cloak Tackle",
				fr: "Charge cape sable"
			},
			effect: {
				en: "If Burmy Sandy Cloak has any Fighting Energy attached to it, this attack does 10 damage plus 10 more damage.",
				fr: "Si Cheniti Cape Sable possède de l'Énergie , cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires."
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
		en: "To shelter itself from cold, wintry winds, it covers itself with a cloak made of twigs and leaves."
	},

	retreat: 1,

	variants: [
		{ type: 'normal', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 278044,
		tcgplayer: 84053
	}
}

export default card
