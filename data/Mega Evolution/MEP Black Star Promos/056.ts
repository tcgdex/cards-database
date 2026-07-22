import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Torchic",
		fr: "Poussifeu",
		de: "Flemmli",
		it: "Torchic",
		es: "Torchic",
		pt: "Torchic",
		'es-mx': "Torchic"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",
	dexId: [255],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck",
			fr: "Picpic",
			de: "Pikser",
			it: "Beccata",
			es: "Picotazo",
			pt: "Bicada",
			'es-mx': "Picotazo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 891880
			}
		},
	],
}

export default card
