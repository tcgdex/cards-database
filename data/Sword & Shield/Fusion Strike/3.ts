import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Butterfree",
		fr: "Papilusion",
		es: "Butterfree",
		it: "Butterfree",
		pt: "Butterfree",
		de: "Smettbo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
		es: "Metapod",
		it: "Metapod",
		pt: "Metapod",
		de: "Safcon"
	},

	stage: "Stage2",
	retreat: 1,
	regulationMark: "E",
	illustrator: "ryoma uratsuka",

	description: {
		en: "It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Tricolored Scales"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may make your opponent's Active Pokémon Burned, Confused, and Poisoned."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Gust"
		},

		damage: 90
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card