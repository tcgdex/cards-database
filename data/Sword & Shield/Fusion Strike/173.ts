import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Mandibuzz",
		fr: "Vaututrice",
		es: "Mandibuzz",
		it: "Mandibuzz",
		pt: "Mandibuzz",
		de: "Grypheldis"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Vullaby",
		fr: "Vostourno",
		es: "Vullaby",
		it: "Vullaby",
		pt: "Vullaby",
		de: "Skallyk"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	description: {
		en: "They adorn themselves with bones. There seem to be fashion trends among them, as different bones come into and fall out of popularity."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bone Block"
		},

		damage: 20,

		effect: {
			en: "During your opponent's next turn, Pokémon can't be played from your opponent's hand to evolve the Defending Pokémon.n"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Dark Cutter"
		},

		damage: 70
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card