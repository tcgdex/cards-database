import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Crustle",
		'fr-fr': "Crabaraque"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [558],
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Dwebble"
	},

	description: {
		'en-us': "This highly territorial Pokémon prefers dry\nclimates. It won't come out of its boulder on\nrainy days.",
		'fr-fr': "Il préfère les endroits secs, et rentre dans son rocher quand il pleut. Il défend farouchement son territoire."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Stone Edge",
			'fr-fr': "Lame de Roc"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 50 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card