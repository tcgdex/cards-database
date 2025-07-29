import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Burmy Sandy Cloak",
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
			},
			effect: {
				en: "Once during your turn (before your attack), if Burmy Sandy Cloak is your Active Pokémon, you may search your discard pile for a basic Fighting Energy card and attach it to Burmy Sandy Cloak.",
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
			},
			effect: {
				en: "If Burmy Sandy Cloak has any Fighting Energy attached to it, this attack does 10 damage plus 10 more damage.",
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

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278044
	}
}

export default card
