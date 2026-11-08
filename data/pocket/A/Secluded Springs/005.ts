import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sunflora",
		'fr-fr': "Héliatronc"
	},

	illustrator: "Miki Tanaka",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [192],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Sunkern"
	},

	description: {
		'en-us': "In the daytime, it rushes about in a hectic\nmanner, but it comes to a complete stop when\nthe sun sets.",
		'fr-fr': "En journée, il court énergiquement dans tous les sens, mais il s'arrête net dès que la nuit tombe."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Trip Over",
			'fr-fr': "Croche-Pied"
		},

		damage: 50,
		cost: ["Grass", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card