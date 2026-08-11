import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Kricketune",
		'fr-fr': "Mélokrik",
		'es-es': "Kricketune",
		'it-it': "Kricketune",
		'pt-br': "Kricketune",
		'de-de': "Zirpeise"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		402,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Kricketot",
		'fr-fr': "Crikzik",
		'es-es': "Kricketot",
		'it-it': "Kricketot",
		'pt-br': "Kricketot",
		'de-de': "Zirpurze"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Screech",
				'fr-fr': "Grincement",
				'es-es': "Chirrido",
				'it-it': "Stridio",
				'pt-br': "Agudo",
				'de-de': "Kreideschrei"
			},
			effect: {
				'en-us': "During your next turn, any damage done to the Defending Pokémon by attacks is increased by 60 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, tous les dégâts infligés au Pokémon Défenseur par des attaques sont augmentés de 60 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, cualquier daño infligido al Pokémon Defensor por ataques aumenta en 60 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, i danni inflitti al Pokémon difensore dagli attacchi sono aumentati di 60, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a sua próxima vez de jogar, qualquer dano causado por ataques ao Pokémon Defensor será aumentado em 60 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges wird Schaden, der dem Verteidigenden Pokémon durch Angriffe zugefügt wird, um 60 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 40,

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
		'en-us': "It signals its emotions with its melodies. Scientists are studying these melodic patterns.",
	},

	thirdParty: {
		cardmarket: 288181,
		tcgplayer: 111509
	}
}

export default card
