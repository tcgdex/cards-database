import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Starmie",
		'fr-fr': "Staross",
		'es-es': "Starmie",
		'it-it': "Starmie",
		'pt-br': "Starmie",
		'de-de': "Starmie"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'es-es': "Staryu",
		'it-it': "Staryu",
		'pt-br': "Staryu",
		'de-de': "Sterndu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Recover",
				'fr-fr': "Soin",
				'es-es': "Recuperación",
				'it-it': "Ripresa",
				'pt-br': "Recuperação",
				'de-de': "Genesung"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon and heal all damage from it.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon y cura todos sus puntos de daño.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon e curalo da tutti i danni.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon e cure todos os danos desse Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel und heile allen Schaden bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Core Splash",
				'fr-fr': "Trempe-Cœur",
				'es-es': "Núcleo Salpicadura",
				'it-it': "Nucleosplash",
				'pt-br': "Núcleo Borrifante",
				'de-de': "Kernplatscher"
			},
			effect: {
				'en-us': "If this Pokémon has any Psychic Energy attached to it, this attack does 30 more damage.",
				'fr-fr': "Si de l'Énergie Psychic est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Psychic unida a él, este ataque hace 30 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie Psychic assegnate, questo attacco infligge 30 danni in più.",
				'pt-br': "Se este Pokémon possuir alguma Energia Psychic ligada a ele, esse ataque causará 30 de danos adicionais.",
				'de-de': "Wenn an dieses Pokémon bereits Psychic-Energie angelegt ist, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.",
	},

	thirdParty: {
		cardmarket: 281371,
		tcgplayer: 89539
	}
}

export default card
