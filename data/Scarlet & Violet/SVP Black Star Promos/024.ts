import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		en: "Growlithe",
		fr: "Caninos",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Stoke",
			fr: "Attisement",
		},

		effect: {
			en: "Search your deck for up to 2 Basic {R} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {R} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
		}
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées",
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
	illustrator: "Uta",
	description: {
		en: "It's very friendly and faithful to people. It will try to repel enemies by barking and biting.",
		fr: "Ce Pokémon est particulièrement affectueux et loyal. Il aboie et mord pour se débarrasser de ses adversaires.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 703192,
				tcgplayer: 500563
			},
		}
	],
}

export default card
