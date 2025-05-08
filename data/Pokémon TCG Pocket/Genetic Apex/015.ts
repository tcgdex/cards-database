import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Parasect",
		fr: "Parasect"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Paras",
		fr: "Paras"
	},

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche"
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "The bug is mostly dead, with the mushroom on its back having become the main body. If the mushroom comes off, the bug stops moving.",
		fr: "L'insecte est quasiment mort, à ce stade, et le champignon est devenu le véritable cerveau. Si on l'ôte de seon dos, il ne peut plus bouger."
	}
}

export default card
