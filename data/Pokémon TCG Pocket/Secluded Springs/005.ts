import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Sunflora",
		fr: "Héliatronc"
	},

	illustrator: "Miki Tanaka",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Sunkern"
	},

	description: {
		en: "In the daytime, it rushes about in a hectic\nmanner, but it comes to a complete stop when\nthe sun sets.",
		fr: "En journée, il court énergiquement dans tous les sens, mais il s'arrête net dès que la nuit tombe."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Trip Over",
			fr: "Croche-Pied"
		},

		damage: 50,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card