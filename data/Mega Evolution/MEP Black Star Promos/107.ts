import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu ex",
		fr: "Pikachu-ex",
		es: "Pikachu ex",
	},

	suffix: "ex",
	illustrator: "YOSHIROTTEN",
	rarity: "Promo",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [25],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pika-Pika Parade",
			fr: "Parade Pika-Pika",
			es: "Desfile Pika Pika",
		},

		effect: {
			en: "Search your deck for any number of Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck le nombre voulu de Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja cualquier cantidad de Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
		}
	},
	{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
			es: "Rayo",
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895615,
				tcgplayer: 713257
			}
		}
	],
}

export default card
