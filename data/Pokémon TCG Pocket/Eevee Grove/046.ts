import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Liepard",
		fr: "Léopardus"
	},

	illustrator: "kawayoo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Purrloin"
	},

	description: {
		en: "Don't be fooled by its gorgeous fur and elegant\nfigure. This is a moody and vicious Pokémon.",
		fr: "On se laisse facilement éblouir par son pelage magnifique et son allure élégante, mais gare à son caractère imprévisible et agressif."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante"
		},

		damage: 70,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card