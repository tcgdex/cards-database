import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Avalugg",
		fr: "Séracrawl"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [713],
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Bergmite",
		fr: "Grelaçon"
	},

	description: {
		en: "This Pokémon uses its massive icy body to flatten\nanything that gets in its way. When it's floating\nout on the ocean, it looks exactly like drift ice."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Frost Barrier",
			fr: "Barrière de Givre"
		},

		damage: 70,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 20 dégâts provenant des attaques."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 4,

	boosters: ["mega-gyarados"]
}

export default card