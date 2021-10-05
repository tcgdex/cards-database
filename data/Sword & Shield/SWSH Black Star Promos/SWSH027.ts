import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Noctowl",
		es: "Noctowl",
		pt: "Noctowl",
		de: "Noctuh"
	},

	illustrator: "Misa Tsutsui",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Hoothoot"
	},

	attacks: [{
		name: {
			en: "Wing Attack",
			es: "Ataque Ala",
			pt: "Wing Attack",
			de: "Flügelschlag"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Carry Off",
			es: "Arrebatar",
			pt: "Carry Off",
			de: "Davontragen"
		},

		effect: {
			en: "Choose 1 of your opponent’s Benched Pokémon. They shuffle that Pokémon and all attached cards into their deck. Then, shuffle this Pokémon and all attached cards into your deck.",
			es: "Elige 1 de los Pokémon en Banca de tu rival. Tu rival pone ese Pokémon y todas las cartas unidas a él en su baraja, y baraja todas las cartas. Después, pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			pt: "Choose 1 of your opponent’s Benched Pokémon. They shuffle that Pokémon and all attached cards into their deck. Then, shuffle this Pokémon and all attached cards into your deck.",
			de: "Wähle 1 Pokémon auf der Bank deines Gegners. Er mischt jenes Pokémon und alle angelegten Karten in sein Deck. Mische anschließend dieses Pokémon und alle angelegten Karten in dein Deck."
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
	}
}

export default card