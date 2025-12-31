import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Whiscash",
		fr: "Barbicha"
	},

	illustrator: "Shinji Kanda",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [340],
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Barboach"
	},

	description: {
		en: "It is extremely protective of its territory. If any\nfoe approaches, it attacks using vicious tremors.",
		fr: "Il est très protecteur vis-à-vis de son territoire. Si des ennemis approchent, il le défend en déclenchant des secousses terribles."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Earthquake",
			fr: "Séisme"
		},

		damage: 130,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack also does 10 damage to each of your Benched Pokémon.",
			fr: "Cette attaque inflige aussi 10 dégâts à chacun de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card