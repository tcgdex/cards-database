import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Noctowl",
		'fr-fr': "Noarfang",
		'es-es': "Noctowl",
		'it-it': "Noctowl",
		'pt-br': "Noctowl",
		'de-de': "Noctuh"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot",
		'es-es': "Hoothoot",
		'it-it': "Hoothoot",
		'pt-br': "Hoothoot",
		'de-de': "Hoothoot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Ailes",
				'es-es': "Ataque Ala",
				'it-it': "Attacco d'Ala",
				'pt-br': "Ataque de Asa",
				'de-de': "Flügelschlag"
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Carry Off",
				'fr-fr': "Enlèvement",
				'es-es': "Arrebatar",
				'it-it': "Portavia",
				'pt-br': "Levar Para Longe",
				'de-de': "Davontragen"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon. They shuffle that Pokémon and all attached cards into their deck. Then, shuffle this Pokémon and all attached cards into your deck.",
				'fr-fr': "Choisissez l'un des Pokémon de Banc de votre adversaire. Il mélange avec son deck ce Pokémon-là et toutes les cartes attachées. Ensuite, mélangez dans votre deck ce Pokémon et toutes les cartes attachées.",
				'es-es': "Elige 1 de los Pokémon en Banca de tu rival. Tu rival pone ese Pokémon y todas las cartas unidas a él en su baraja, y baraja todas las cartas. Después, pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
				'it-it': "Scegli uno dei Pokémon in panchina del tuo avversario. Il tuo avversario rimischia quel Pokémon e tutte le carte a esso assegnate nel suo mazzo. Poi rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				'pt-br': "Escolha 1 dos Pokémon no Banco do seu oponente. Seu oponente embaralha aquele Pokémon e todas as cartas ligadas a ele no próprio baralho. Em seguida, embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				'de-de': "Wähle 1 Pokémon auf der Bank deines Gegners. Er mischt jenes Pokémon und alle angelegten Karten in sein Deck. Mische anschließend dieses Pokémon und alle angelegten Karten in dein Deck."
			},

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
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "When it needs to think, it rotates its head 180 degrees to sharpen its intellectual power."
	},

	dexId: [164],

	thirdParty: {
		cardmarket: 436814,
		tcgplayer: 208463
	}
}

export default card
