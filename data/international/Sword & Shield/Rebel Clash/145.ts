import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [521],

	name: {
		'en-us': "Unfezant",
		'fr-fr': "Déflaisan",
		'es-es': "Unfezant",
		'it-it': "Unfezant",
		'pt-br': "Unfezant",
		'de-de': "Fasasnob"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Tranquill",
		'fr-fr': "Colombeau",
		'es-es': "Tranquill",
		'it-it': "Tranquill",
		'pt-br': "Tranquill",
		'de-de': "Navitaub"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Daunt",
				'fr-fr': "Découragement",
				'es-es': "Arredrar",
				'it-it': "Scoraggiare",
				'pt-br': "Atemorizar",
				'de-de': "Entmutigen"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon's attacks do 50 less damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 50 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 50 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 50 danni in meno, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 50 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 50 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Air Slash",
				'fr-fr': "Lame d'Air",
				'es-es': "Tajo Aéreo",
				'it-it': "Eterelama",
				'pt-br': "Golpe de Ar",
				'de-de': "Luftschnitt"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un'Energia da questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 150,
	types: ["Colorless"],
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "Unfezant are exceptional fliers. The females are known for their stamina, while the males outclass them in terms of speed."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458123,
				tcgplayer: 213245
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458123,
				tcgplayer: 213245
			}
		},
	],
}

export default card
