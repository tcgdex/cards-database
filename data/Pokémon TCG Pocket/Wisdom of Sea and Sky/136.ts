import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon2",
		fr: "Porygon2"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [233],
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Porygon"
	},

	description: {
		en: "This is a Porygon that was updated with special\ndata. Porygon2 develops itself by learning about\nmany different subjects all on its own.",
		fr: "Fruit de la mise à jour d'un Porygon avec des données spéciales, il peut apprendre et se développer de manière autonome."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Buggy Evolution",
			fr: "Évolution Boguée"
		},

		effect: {
			en: "Whenever you attach an Energy from your Energy Zone to this Pokémon, put a random card from your deck that evolves from this Pokémon onto this Pokémon to evolve it.",
			fr: "Lorsque vous attachez une Énergie de votre zone Énergie à ce Pokémon, prenez au hasard  dans votre deck, puis placez-la sur ce Pokémon pour le faire évoluer."
		}
	}],

	attacks: [{
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card