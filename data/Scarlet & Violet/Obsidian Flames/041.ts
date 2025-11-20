import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [637],
	set: Set,

	name: {
		fr: "Pyrax",
		en: "Volcarona",
		es: "Volcarona",
		it: "Volcarona",
		pt: "Volcarona",
		de: "Ramoth"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		fr: "Pyronille",
		en: "Larvesta",
		es: "Larvesta",
		it: "Larvesta",
		pt: "Larvesta",
		de: "Ignivor"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Manteau de Feu",
			en: "Flame Cloak",
			es: "Manto Ígneo",
			it: "Radunafuoco",
			pt: "Manto de Chamas",
			de: "Flammenumhang"
		},

		effect: {
			fr: "Attachez une carte Énergie {R} de base de votre pile de défausse à ce Pokémon.",
			en: "Attach a Basic {R} Energy card from your discard pile to this Pokémon.",
			es: "Une 1 carta de Energía {R} Básica de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia base {R} dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia {R} Básica da sua pilha de descarte a este Pokémon.",
			de: "Lege 1 Basis-{R}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			fr: "Explosion de Chaleur",
			en: "Heat Blast",
			es: "Explosión de Calor",
			it: "Caldobomba",
			pt: "Raio de Calor",
			de: "Hitzestoß"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Yukiko Baba",

	thirdParty: {
		cardmarket: 725121
	}
}

export default card