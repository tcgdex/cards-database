import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Noctowl",
		es: "Noctowl",
		pt: "Noctowl",
		de: "Noctuh",
		fr: "Noarfang",
		it: "Noctowl"
	},

	illustrator: "Misa Tsutsui",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Hoothoot",
		fr: "Hoothoot",
		de: "Hoothoot",
		es: "Hoothoot",
		pt: "Hoothoot",
		it: "Hoothoot"
	},

	attacks: [{
		name: {
			en: "Wing Attack",
			es: "Ataque Ala",
			pt: "Ataque de Asa",
			de: "Flügelschlag",
			fr: "Cru-Ailes",
			it: "Attacco d'Ala"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Carry Off",
			es: "Arrebatar",
			pt: "Levar Para Longe",
			de: "Davontragen",
			fr: "Enlèvement",
			it: "Portavia"
		},

		effect: {
			en: "Choose 1 of your opponent's Benched Pokémon. They shuffle that Pokémon and all attached cards into their deck. Then, shuffle this Pokémon and all attached cards into your deck.",
			es: "Elige 1 de los Pokémon en Banca de tu rival. Tu rival pone ese Pokémon y todas las cartas unidas a él en su baraja, y baraja todas las cartas. Después, pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			pt: "Escolha 1 dos Pokémon no Banco do seu oponente. Seu oponente embaralha aquele Pokémon e todas as cartas ligadas a ele no próprio baralho. Em seguida, embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			de: "Wähle 1 Pokémon auf der Bank deines Gegners. Er mischt jenes Pokémon und alle angelegten Karten in sein Deck. Mische anschließend dieses Pokémon und alle angelegten Karten in dein Deck.",
			fr: "Choisissez l'un des Pokémon de Banc de votre adversaire. Il mélange avec son deck ce Pokémon-là et toutes les cartes attachées. Ensuite, mélangez dans votre deck ce Pokémon et toutes les cartes attachées.",
			it: "Scegli uno dei Pokémon in panchina del tuo avversario. Il tuo avversario rimischia quel Pokémon e tutte le carte a esso assegnate nel suo mazzo. Poi rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,

	description: {
		en: "When it needs to think, it rotates its head 180 degrees to sharpen its intellectual power."
	},

	stage: "Stage1",
	dexId: [164],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
