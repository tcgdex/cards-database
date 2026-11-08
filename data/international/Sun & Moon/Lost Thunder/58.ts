import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Mantine",
		'fr-fr': "Démanta",
		'es-es': "Mantine",
		'it-it': "Mantine",
		'pt-br': "Mantine",
		'de-de': "Mantax"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		226,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Mantine Surf",
				'fr-fr': "Surf Démanta",
				'es-es': "Surfeo Mantine",
				'it-it': "Surf Mantine",
				'pt-br': "Surfe Mantine",
				'de-de': "Mantax-Surfen"
			},
			effect: {
				'en-us': "If this Pokémon has any Energy attached to it, it has no Retreat Cost.",
				'fr-fr': "Si de l’Énergie est attachée à ce Pokémon, il n’a pas de Coût de Retraite.",
				'es-es': "Si este Pokémon tiene alguna Energía unida a él, no tiene ningún Coste de Retirada.",
				'it-it': "Se questo Pokémon ha delle Energie assegnate, non ha costo di ritirata.",
				'pt-br': "Se este Pokémon tiver alguma Energia ligada a ele, não terá custo de Recuo.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Energie angelegt ist, hat es keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'es-es': "Surf",
				'it-it': "Surf",
				'pt-br': "Surfar",
				'de-de': "Surfer"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "While elegantly swimming in the sea, it ignores Remoraid that cling to its fins seeking food scraps.",
	},

	thirdParty: {
		cardmarket: 365697,
		tcgplayer: 178865
	}
}

export default card
