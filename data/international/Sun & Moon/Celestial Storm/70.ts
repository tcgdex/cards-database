import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

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

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shadow Shield",
				'fr-fr': "Spectro-Bouclier",
				'es-es': "Guardia Espectro",
				'it-it': "Spettroguardia",
				'pt-br': "Escudo Sombrio",
				'de-de': "Phantomschutz"
			},
			effect: {
				'en-us': "If this Pokémon has any Psychic Energy attached to it, it takes 20 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Si de l’Énergie Psychic est attachée à ce Pokémon, il subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Si este Pokémon tiene alguna Energía Psychic unida a él, los ataques le hacen 20 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
				'it-it': "Se questo Pokémon ha delle Energie Psychic assegnate, subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Se este Pokémon tiver alguma Energia Psychic ligada a ele, receberá 20 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Psychic-Energie angelegt ist, werden ihm durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Full Moon Ray",
				'fr-fr': "Rayon Pleine Lune",
				'es-es': "Rayo Luna Llena",
				'it-it': "Raggio della Luna Piena",
				'pt-br': "Raio de Lua Cheia",
				'de-de': "Vollmondstrahl"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "80+",

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
		cardmarket: 361315,
		tcgplayer: 170892
	}
}

export default card
