import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Toxel",
		es: "Toxel",
	},

	illustrator: "Mina Nakai",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [848],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Call for Family",
			es: "Llamar a la Familia",
		},

		effect: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Playful Kick",
			es: "Patada Juguetona",
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 888609,
				tcgplayer: 694692
			}
		},
	],
}

export default card
