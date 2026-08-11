import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Slowking",
		'fr-fr': "Roigada",
		'es-es': "Slowking",
		'it-it': "Slowking",
		'pt-br': "Slowking",
		'de-de': "Laschoking"
	},

	illustrator: "sowsow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Memory Melt",
				'fr-fr': "Mémoire Déliquescente",
				'es-es': "Disipar Memoria",
				'it-it': "Vuoto di Memoria",
				'pt-br': "Memória Derretida",
				'de-de': "Gedächtnisschmelze"
			},
			effect: {
				'en-us': "Look at your opponent’s hand and put a card you find there in the Lost Zone.",
				'fr-fr': "Regardez la main de votre adversaire et placez une carte que vous y trouvez dans la Zone Perdue.",
				'es-es': "Mira las cartas de la mano de tu rival y pon 1 carta que encuentres entre ellas en la Zona Perdida.",
				'it-it': "Guarda le carte in mano al tuo avversario, prendi una carta presente tra esse e mettila nell’area perduta.",
				'pt-br': "Olhe a mão do seu oponente e coloque 1 carta que encontrar lá na Zona Perdida.",
				'de-de': "Schau dir die Hand deines Gegners an und lege 1 Karte, die du dort findest, ins Nirgendwo."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic",
				'fr-fr': "Psyko",
				'es-es': "Psíquico",
				'it-it': "Psichico",
				'pt-br': "Psíquico",
				'de-de': "Psychokinese"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
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

	retreat: 2,

	description: {
		'en-us': "This Pokémon is so famed for its intellect that a proverb still persists in some regions: \"When in doubt, ask Slowking.\"",
	},

	thirdParty: {
		cardmarket: 365694,
		tcgplayer: 178862
	}
}

export default card
