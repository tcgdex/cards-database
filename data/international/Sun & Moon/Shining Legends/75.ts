import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Raichu GX",
		'fr-fr': "Raichu GX",
		'es-es': "Raichu GX",
		'it-it': "Raichu GX",
		'pt-br': "Raichu GX",
		'de-de': "Raichu GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 210,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Powerful Spark",
				'fr-fr': "Étincelle Puissante",
				'es-es': "Chispa Poderosa",
				'it-it': "Superscintilla",
				'pt-br': "Fagulha Poderosa",
				'de-de': "Mächtiger Funke"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Lightning Energy attached to your Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Lightning attachées à vos Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Lightning unida a tus Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Lightning assegnata ai tuoi Pokémon.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Lightning ligada aos seus Pokémon.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an deine Pokémon angelegten Lightning-Energien zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder",
				'fr-fr': "Fatal-Foudre",
				'es-es': "Trueno",
				'it-it': "Tuono",
				'pt-br': "Trovão",
				'de-de': "Donner"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 30 dégâts.",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Este Pokémon causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 160,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Voltail GX",
				'fr-fr': "Queue Survoltée GX",
				'es-es': "Colavoltio GX",
				'it-it': "Coda Voltaica-GX",
				'pt-br': "Cauda Voltaica GX",
				'de-de': "Voltschweif GX"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Paralyzed. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Paralizado. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il Pokémon attivo del tuo avversario viene paralizzato. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Paralisado (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt paralysiert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 302213,
		tcgplayer: 146737
	}
}

export default card
