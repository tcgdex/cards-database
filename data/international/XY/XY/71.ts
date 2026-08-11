import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Krookodile",
		'fr-fr': "Crocorible",
		'es-es': "Krookodile",
		'it-it': "Krookodile",
		'pt-br': "Krookodile",
		'de-de': "Rabigator"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		553,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
		'es-es': "Krokorok",
		'it-it': "Krokorok",
		'pt-br': "Krokorok",
		'de-de': "Rokkaiman"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bother",
				'fr-fr': "Supplice",
				'es-es': "Chinchar",
				'it-it': "Tormento",
				'pt-br': "Azucrinar",
				'de-de': "Tortur"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent can't play any Supporter cards from his or her hand during his or her next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Supporter de sa main pendant son prochain tour.",
				'es-es': "Lanza 1 moneda. Si sale cara, tu rival no puede jugar ninguna carta de Partidario de su mano durante su próximo turno.",
				'it-it': "Lancia una moneta. Se esce testa, il tuo avversario non può giocare le carte Aiuto che ha in mano durante il suo prossimo turno.",
				'pt-br': "Jogue uma moeda. Se sair cara, seu oponente não poderá jogar nenhum card de Apoiador da mão dele ou dela durante a próxima vez de jogar desse oponente.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" kann dein Gegner während seines nächsten Zuges keine Unterstützerkarten von seiner Hand spielen."
			},
			damage: 50,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knock Back",
				'fr-fr': "Dégagement",
				'es-es': "Devolver Noqueo",
				'it-it': "Allontanato",
				'pt-br': "Jogar de Volta",
				'de-de': "Schlag versetzen"
			},
			effect: {
				'en-us': "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Seu oponente troca o Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 80,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Very violent Pokémon, they try to clamp down on anything that moves in front of their eyes.",
	},

	thirdParty: {
		cardmarket: 281408,
		tcgplayer: 86545
	}
}

export default card
