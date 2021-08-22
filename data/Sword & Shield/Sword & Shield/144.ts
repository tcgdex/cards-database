import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Noctowl",
		fr: "Noarfang",
		es: "Noctowl",
		it: "Noctowl",
		pt: "Noctowl",
		de: "Noctuh"
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
		en: "Hoothoot",
		fr: "Hoothoot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Ailes",
				es: "Ataque Ala",
				it: "Attacco d’Ala",
				pt: "Ataque de Asa",
				de: "Flügelschlag"
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
				en: "Carry Off",
				fr: "Enlèvement",
				es: "Arrebatar",
				it: "Portavia",
				pt: "Levar Para Longe",
				de: "Davontragen"
			},
			effect: {
				en: "Choose 1 of your opponent’s Benched Pokémon. They shuffle that Pokémon and all attached cards into their deck. Then, shuffle this Pokémon and all attached cards into your deck.",
				fr: "Choisissez l’un des Pokémon de Banc de votre adversaire. Il mélange avec son deck ce Pokémon-là et toutes les cartes attachées. Ensuite, mélangez dans votre deck ce Pokémon et toutes les cartes attachées.",
				es: "Elige 1 de los Pokémon en Banca de tu rival. Tu rival pone ese Pokémon y todas las cartas unidas a él en su baraja, y baraja todas las cartas. Después, pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
				it: "Scegli uno dei Pokémon in panchina del tuo avversario. Il tuo avversario rimischia quel Pokémon e tutte le carte a esso assegnate nel suo mazzo. Poi rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				pt: "Escolha 1 dos Pokémon no Banco do seu oponente. Seu oponente embaralha aquele Pokémon e todas as cartas ligadas a ele no próprio baralho. Em seguida, embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				de: "Wähle 1 Pokémon auf der Bank deines Gegners. Er mischt jenes Pokémon und alle angelegten Karten in sein Deck. Mische anschließend dieses Pokémon und alle angelegten Karten in dein Deck."
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
		en: "When it needs to think, it rotates its head 180 degrees to sharpen its intellectual power."
	}
}

export default card
