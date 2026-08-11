import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'es-es': "Lucario",
		'it-it': "Lucario",
		'pt-br': "Lucario",
		'de-de': "Lucario"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dual Armor",
				'fr-fr': "Double Armure",
				'es-es': "Armadura Dual",
				'it-it': "Doppiarmatura",
				'pt-br': "Armadura Dupla",
				'de-de': "Doppelte Rüstung"
			},
			effect: {
				'en-us': "If this Pokémon has any Metal Energy attached to it, this Pokémon’s type is both Fighting and Metal.",
				'fr-fr': "Si de l’Énergie Metal est attachée à ce Pokémon, le type de ce Pokémon est Fighting et Metal.",
				'es-es': "Si este Pokémon tiene alguna Energía Metal unida a él, el tipo de este Pokémon es Fighting y Metal.",
				'it-it': "Se questo Pokémon ha delle Energie Metal assegnate, il tipo di questo Pokémon è sia Fighting che Metal.",
				'pt-br': "Se este Pokémon possui alguma Energia Metal ligada a ele, o tipo desse Pokémon é Fighting e Metal.",
				'de-de': "Wenn an dieses Pokémon bereits Metal-Energie angelegt ist, ist dieses Pokémon sowohl vom Typ Fighting als auch Metal."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hurricane Kick",
				'fr-fr': "Pied Ouragan",
			},
			effect: {
				'en-us': "Does 30 more damage for each Prize card your opponent has taken.",
				'fr-fr': "Inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "By reading the auras of all things, it can tell how others are feeling from over half a mile away.",
	},

	thirdParty: {
		cardmarket: 280817,
		tcgplayer: 86884
	}
}

export default card
