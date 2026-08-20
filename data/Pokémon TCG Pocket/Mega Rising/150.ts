import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Absol",
		fr: "Absol"
	},

	illustrator: "nagimiso",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [359],
	hp: 80,
	types: ["Darkness"],

	description: {
		en: "Because of this Pokémon's ability to detect\ndanger, people mistook Absol as a bringer\nof doom."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ominous Claw",
			fr: "Griffe du Malheur"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "Flip a coin. If heads, your opponent reveals their hand. Choose a Supporter card you find there and discard it.",
			fr: "Lancez une pièce. Si c'est face, votre adversaire dévoile sa main. Choisissez une carte Supporter que vous y trouvez et défaussez-la."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card