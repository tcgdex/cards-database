import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Jellicent",
		'fr-fr': "Moyade",
		'es-es': "Jellicent",
		'it-it': "Jellicent",
		'pt-br': "Jellicent",
		'de-de': "Apoquallyp"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		593,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Frillish",
		'fr-fr': "Viskuse",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Vengeful Wish",
				'fr-fr': "Désir de Vengeance",
			},
			effect: {
				'en-us': "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does the same amount of damage to the Defending Pokémon.",
				'fr-fr': "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige la même quantité de dégâts au Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Absorb Life",
				'fr-fr': "Absorption",
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They propel themselves by expelling absorbed seawater from their bodies. Their favorite food is life energy.",
	},

	thirdParty: {
		cardmarket: 280260,
		tcgplayer: 86306
	}
}

export default card
