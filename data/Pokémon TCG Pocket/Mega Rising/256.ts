import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja ex",
		fr: "Amphinobi-ex"
	},

	illustrator: "PLANETA Saito",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [658],
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Shifting Stream",
			fr: "Courant Changeant"
		},

		effect: {
			en: "Once during your turn, you may switch your Active {W} Pokémon with 1 of your Benched Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez échanger votre Pokémon {W} Actif contre un de vos Pokémon de Banc."
		}
	}],

	attacks: [{
		name: {
			en: "Aqua Edge",
			fr: "Aqua-Dague"
		},

		damage: 100,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card