import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Accelgor",
		'fr-fr': "Limaspeed",
		'es-es': "Accelgor",
		'it-it': "Accelgor",
		'pt-br': "Accelgor",
		'de-de': "Hydragil"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		617,
	],

	hp: 90,

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
				'en-us': "Recover",
				'fr-fr': "Soin",
				'es-es': "Recuperación",
				'it-it': "Ripresa",
				'pt-br': "Recuperação",
				'de-de': "Genesung"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon and heal all damage from it.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon y cura todos sus puntos de daño.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon e curalo da tutti i danni.",
				'pt-br': "Descarte 1 Energia deste Pokémon e cure todo o dano dele.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel und heile bei ihm allen Schaden."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Speed Attack",
				'fr-fr': "Attaque Rapide",
				'es-es': "Ataque Fugaz",
				'it-it': "Attacco Veloce",
				'pt-br': "Ataque em Velocidade",
				'de-de': "Tempoangriff"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Having removed its heavy shell, it becomes very light and can fight with ninja-like movements.",
	},

	thirdParty: {
		cardmarket: 311859,
		tcgplayer: 149030
	}
}

export default card
