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

	illustrator: "TOKIYA",
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
				"Colorless",
			],
			name: {
				'en-us': "Shadow Drain",
				'fr-fr': "Sangsue de l'Ombre"
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slashing Strike",
				'fr-fr': "Coup Déchirant"
			},
			effect: {
				'en-us': "This Pokémon can't use Slashing Strike during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour."
			},
			damage: 80,

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
		tcgplayer: 90148
	}
}

export default card
