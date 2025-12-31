import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Guzzlord ex",
		fr: "Engloutyran-ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Grindcore",
			fr: "Grindcore"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque côté face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire."
		}
	}, {
		name: {
			en: "Tyrannical Hole",
			fr: "Trou Tyrannique"
		},

		damage: 120,
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card
