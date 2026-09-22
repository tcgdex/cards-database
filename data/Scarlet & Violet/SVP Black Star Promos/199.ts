import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Zarude",
		es: "Zarude",
	},

	illustrator: "Uninori",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [893],
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Pluck Off",
			es: "Sacar",
	},

		effect: {
			en: "Search your deck for up to 3 Basic {G} Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 3 cartas de Energía {G} Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
	}
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			en: "Hammer Whip",
			es: "Látigo Martillo",
	},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
	},

		damage: 130
	}],

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 826137,
				tcgplayer: 637662
			},
		}
	]
}

export default card
