import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Accelgor",
		'fr-fr': "Limaspeed",
		'es-es': "Accelgor",
		'it-it': "Accelgor",
		'pt-br': "Accelgor",
		'de-de': "Hydragil"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		617,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Shelmet",
		'fr-fr': "Escargaume",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Retribution",
				'fr-fr': "Rétribution",
			},
			effect: {
				'en-us': "If an Escavalier you had in play was Knocked Out by damage from an opponent's attack during his or her last turn, put all Energy attached to the Defending Pokémon into your opponent's hand.",
				'fr-fr': "Si un Lançargot que vous aviez en jeu a été mis K.O. par les dégâts d'une attaque de votre adversaire pendant son dernier tour, mettez toutes les Énergies attachées au Pokémon Défenseur dans la main de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Signal Beam",
				'fr-fr': "Rayon signal",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "When its body dries out, it weakens. So it wraps a membrane around itself for protection while it spits poison.",
	},

	thirdParty: {
		cardmarket: 281029,
		tcgplayer: 83461
	}
}

export default card
