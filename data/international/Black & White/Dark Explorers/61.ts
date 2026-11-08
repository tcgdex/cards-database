import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Umbreon",
		'fr-fr': "Noctali",
		'es-es': "Umbreon",
		'it-it': "Umbreon",
		'pt-br': "Umbreon",
		'de-de': "Nachtara"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde Folie"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Shutdown",
				'fr-fr': "Dépouillage des Ombres"
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, défaussez toutes les Énergies attachées au Pokémon Défenseur."
			},
			damage: 60,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When exposed to the moon's aura, the rings on its body glow faintly and it gains a mysterious power.",
	},

	thirdParty: {
		cardmarket: 280388,
		tcgplayer: 90149
	}
}

export default card
