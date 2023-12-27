import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity",
		fr: "Salarsen",
		es: "Toxtricity",
		it: "Toxtricity",
		pt: "Toxtricity",
		de: "Riffex"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		en: "Toxel",
		fr: "Toxizap",
		es: "Toxel",
		it: "Toxel",
		pt: "Toxel",
		de: "Toxel"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Ryuta Fuse",

	description: {
		en: "This short-tempered and aggressive Pokémon chugs stagnant water to absorb any toxins it might contain."
	},

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Punk Shock"
		},

		damage: 70,

		effect: {
			en: "You may choose to make your opponent's Active Pokémon Paralyzed. If you do, this Pokémon also does 70 damage to itself."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
