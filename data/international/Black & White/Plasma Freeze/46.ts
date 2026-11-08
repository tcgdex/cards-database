import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Muk",
		'fr-fr': "Grotadmorv",
		'es-es': "Muk",
		'it-it': "Muk",
		'pt-br': "Muk",
		'de-de': "Sleimok"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Suction",
				'fr-fr': "Succion Empoisonnée",
			},
			effect: {
				'en-us': "If the Defending Pokémon is Poisoned, heal 60 damage from this Pokémon.",
				'fr-fr': "Si le Pokémon Défenseur est Empoisonné, soignez 60 dégâts à ce Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Crash",
				'fr-fr': "Flot de Vase",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It's so stinky! Muk's body contains toxic elements, and any plant will wilt when it passes by.",
	},

	thirdParty: {
		cardmarket: 280924,
		tcgplayer: 87627
	}
}

export default card
