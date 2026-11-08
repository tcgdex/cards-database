import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Gogoat",
		'fr-fr': "Chevroum",
		'es-es': "Gogoat",
		'it-it': "Gogoat",
		'pt-br': "Gogoat",
		'de-de': "Chevrumm"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		673,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Skiddo",
		'fr-fr': "Cabriolaine",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Wallop",
				'fr-fr': "Rafale de Feuilles",
				'es-es': "Golpazo Hojas",
				'it-it': "Battifoglia",
				'pt-br': "Batida de Folha",
				'de-de': "Blattprügel"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon’s Leaf Wallop attack does 50 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l’attaque Rafale de Feuilles de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Golpazo Hojas de este Pokémon hace 50 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l’attacco Battifoglia di questo Pokémon infligge 50 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a sua próxima vez de jogar, o ataque Batida de Folha deste Pokémon causará 50 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Blattprügel dieses Pokémon 50 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Solar Beam",
				'fr-fr': "Lance-Soleil",
				'es-es': "Rayo Solar",
				'it-it': "Solarraggio",
				'pt-br': "Raio Solar",
				'de-de': "Solarstrahl"
			},

			damage: 100,

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
		'en-us': "They inhabit mountainous regions. The leader of the herd is decided by a battle of clashing horns.",
	},

	thirdParty: {
		cardmarket: 365676,
		tcgplayer: 178839
	}
}

export default card
