import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Trevenant",
		'fr-fr': "Desséliande",
		'es-es': "Trevenant",
		'it-it': "Trevenant",
		'pt-br': "Trevenant",
		'de-de': "Trombork"
	},

	illustrator: "Hiroyuki Yamamoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		709,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Phantump",
		'fr-fr': "Brocélôme",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poltergeist",
				'fr-fr': "Poltergeist",
				'es-es': "Poltergeist",
				'it-it': "Poltergeist",
				'pt-br': "Poltergeist",
				'de-de': "Poltergeist"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. This attack does 30 damage for each Trainer card you find there.",
				'fr-fr': "Votre adversaire dévoile sa main. Cette attaque inflige 30 dégâts pour chaque carte Dresseur que vous y trouvez.",
				'es-es': "Tu rival enseña las cartas de su mano. Este ataque hace 30 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 30 danni per ogni carta Allenatore presente tra quelle carte.",
				'pt-br': "Seu oponente revela a própria mão. Este ataque causa 30 pontos de dano para cada carta de Treinador que encontrar lá.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der Trainerkarten zu, die du dort findest."
			},
			damage: "30×",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Horn Leech",
				'fr-fr': "Encornebois",
				'es-es': "Asta Drenaje",
				'it-it': "Legnicorno",
				'pt-br': "Chifre Sugador",
				'de-de': "Holzgeweih"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This Pokémon is said to devour anyone daring to ravage the forest. To the creatures dwelling in the forest, it offers great kindness.",
	},

	thirdParty: {
		cardmarket: 297471,
		tcgplayer: 130692
	}
}

export default card
