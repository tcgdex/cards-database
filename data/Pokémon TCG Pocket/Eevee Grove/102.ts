import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Farfetch'd",
		fr: "Canarticho"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "The stalk this Pokémon carries in its wings serves\nas a sword to cut down opponents. In a dire\nsituation, the stalk can also serve as food.",
		fr: "Il tranche ses adversaires avec sa tige, qu'il manie comme une épée. Quand la situation l'exige, il s'en nourrit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Leek Slap",
			fr: "Coup d'Oignon"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card