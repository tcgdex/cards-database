import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Krookodile",
		fr: "Crocorible"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Krokorok"
	},

	description: {
		en: "After clamping down with its powerful jaws, it\ntwists its body around to rip its prey in half.",
		fr: "Une fois qu'il a attrapé une proie avec ses puissantes mâchoires, il secoue son corps de toutes ses forces pour la déchiqueter."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Poaching Fangs",
			fr: "Crocs Extirpants"
		},

		damage: 90,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "Flip 3 coins. For each heads, a card is chosen at random from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			fr: "Lancez 3 pièces. Pour chaque côté face, une carte est choisie au hasard dans la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card