import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Lunala",
		'fr-fr': "Lunala",
		'es-es': "Lunala",
		'it-it': "Lunala",
		'pt-br': "Lunala",
		'de-de': "Lunala"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		792,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Cosmoem",
		'fr-fr': "Cosmovum",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Shatter Shot",
				'fr-fr': "Coup Fracassant",
				'es-es': "Proyectil Estallido",
				'it-it': "Frantumacolpo",
				'pt-br': "Tiro de Estilhaçar",
				'de-de': "Splitterschuss"
			},
			effect: {
				'en-us': "This attack does 40 damage times the amount of Psychic Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 40 dégâts multipliés par le nombre d’Énergies Psychic attachées à ce Pokémon.",
				'es-es': "Este ataque hace 40 puntos de daño por cada Energía Psychic unida a este Pokémon.",
				'it-it': "Questo attacco infligge 40 danni per ogni Energia Psychic assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 40 pontos de dano vezes a quantidade de Energia Psychic ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt 40 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Psychic-Energien zu."
			},
			damage: "40×",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Wings of the Moone",
				'fr-fr': "Ailes du Halo Lunaire",
				'es-es': "Alas de la Luna",
				'it-it': "Ali Lunari",
				'pt-br': "Asas Lunares",
				'de-de': "Mondscheiben-Flügel"
			},
			effect: {
				'en-us': "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
				'fr-fr': "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc, de la manière que vous voulez.",
				'es-es': "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees.",
				'it-it': "Sposta a piacimento tutte le Energie da questo Pokémon a quelli nella tua panchina.",
				'pt-br': "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar.",
				'de-de': "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is said to be a female evolution of Cosmog. When its third eye activates, away it flies to another world.",
	},

	thirdParty: {
		cardmarket: 297522,
		tcgplayer: 130971
	}
}

export default card
