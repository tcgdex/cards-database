import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Starmie",
		'fr-fr': "Staross",
		'es-es': "Starmie",
		'it-it': "Starmie",
		'pt-br': "Starmie",
		'de-de': "Starmie"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
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
				'en-us': "Deep Sea Swirl",
				'fr-fr': "Remous Abyssal",
				'es-es': "Remolino de Alta Mar",
				'it-it': "Vortice Abissale",
				'pt-br': "Giro em Mar Profundo",
				'de-de': "Tiefseewirbel"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 7 cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 7 cartes.",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 7 cartas.",
				'it-it': "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca sette carte.",
				'pt-br': "Embaralhe a mão no seu baralho. Em seguida, compre 7 cards.",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 7 Karten."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Balance Bind",
				'fr-fr': "Étreinte Équilibre",
				'es-es': "Sujeción Equilibrada",
				'it-it': "Equidestino",
				'pt-br': "Ligação de Equilíbrio",
				'de-de': "Gleichgewichtsfessel"
			},
			effect: {
				'en-us': "If you and your opponent have the same number of Benched Pokémon, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Si votre adversaire et vous avez le même nombre de Pokémon de Banc, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Si tu rival y tú tenéis el mismo número de Pokémon en Banca, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Se hai lo stesso numero di Pokémon in panchina del tuo avversario, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Se você e o seu oponente tiverem o mesmo número de Pokémon no Banco, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wenn du und dein Gegner dieselbe Anzahl Pokémon auf der Bank haben, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

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
		'en-us': "At the center of its body is a red core, which sends mysterious radio signals into the night sky.",
	},

	thirdParty: {
		cardmarket: 286276,
		tcgplayer: 107149
	}
}

export default card
