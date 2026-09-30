import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Zarude",
		fr: "Zarude",
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
			fr: "Retrait",
	},

		effect: {
			en: "Search your deck for up to 3 Basic {G} Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie {G} de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
	}
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			en: "Hammer Whip",
			fr: "Fouet Marteau",
	},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
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
