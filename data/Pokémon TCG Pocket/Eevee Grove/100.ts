import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Ekans",
		fr: "Abo"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "By dislocating its jaw, it can swallow prey larger\nthan itself. After a meal, it curls up and rests.",
		fr: "Il peut se déboîter la mâchoire pour avaler tout rond des proies plus grosses que lui. Il se replie ensuite sur lui-même pour digérer."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card