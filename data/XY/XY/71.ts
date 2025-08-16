import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Krookodile",
		fr: "Crocorible",
		es: "Krookodile",
		it: "Krookodile",
		pt: "Krookodile",
		de: "Rabigator"
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
		en: "Krokorok",
		fr: "Escroco",
		es: "Krokorok",
		it: "Krokorok",
		pt: "Krokorok",
		de: "Rokkaiman"
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
				en: "Bother",
				fr: "Supplice",
				es: "Chinchar",
				it: "Tormento",
				pt: "Azucrinar",
				de: "Tortur"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Supporter cards from his or her hand during his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Supporter de sa main pendant son prochain tour.",
				es: "Lanza 1 moneda. Si sale cara, tu rival no puede jugar ninguna carta de Partidario de su mano durante su próximo turno.",
				it: "Lancia una moneta. Se esce testa, il tuo avversario non può giocare le carte Aiuto che ha in mano durante il suo prossimo turno.",
				pt: "Jogue uma moeda. Se sair cara, seu oponente não poderá jogar nenhum card de Apoiador da mão dele ou dela durante a próxima vez de jogar desse oponente.",
				de: "Wirf 1 Münze. Bei \"Kopf\" kann dein Gegner während seines nächsten Zuges keine Unterstützerkarten von seiner Hand spielen."
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
				en: "Knock Back",
				fr: "Dégagement",
				es: "Devolver Noqueo",
				it: "Allontanato",
				pt: "Jogar de Volta",
				de: "Schlag versetzen"
			},
			effect: {
				en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Seu oponente troca o Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
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

	thirdParty: {
		cardmarket: 281408,
		tcgplayer: 86545
	}
}

export default card
