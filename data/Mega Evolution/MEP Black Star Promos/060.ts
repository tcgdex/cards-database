import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Froakie",
		fr: "Grenousse",
		es: "Froakie",
		it: "Froakie",
		pt: "Froakie",
		de: "Froxy"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [656],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Pound",
			fr: "Écras’Face",
			es: "Destructor",
			it: "Botta",
			pt: "Pancada",
			de: "Pfund"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 891891
			}
		},
	],
}

export default card
