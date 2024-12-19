import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charmeleon"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Claws"
		},

		damage: "60"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander",
		de: "Glumanda"
	}
}

export default card
