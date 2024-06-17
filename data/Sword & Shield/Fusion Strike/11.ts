import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [542],
	set: Set,

	name: {
		en: "Leavanny",
		fr: "Manternel",
		es: "Leavanny",
		it: "Leavanny",
		pt: "Leavanny",
		de: "Matrifol"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
		es: "Swadloon",
		it: "Swadloon",
		pt: "Swadloon",
		de: "Folikon"
	},

	stage: "Stage2",
	retreat: 1,
	regulationMark: "E",
	illustrator: "kodama",

	description: {
		en: "It keeps its eggs warm with heat from fermenting leaves. It also uses leaves to make warm wrappings for Sewaddle."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Healing Circle"
		},

		effect: {
			en: "Heal all damage from each of your Benched Pokémon. If you healed any damage in this way, shuffle this Pokémon and all attached cards into your deck."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Razor Leaf"
		},

		damage: 120
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card