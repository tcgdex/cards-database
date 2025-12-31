import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [255],
	set: Set,

	name: {
		en: "Torchic",
		fr: "Poussifeu",
		es: "Torchic",
		de: "Flemmli",
		it: "Torchic",
		pt: "Torchic",
		'es-mx': "Torchic"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			de: "Kratzer",
			it: "Graffio",
			pt: "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "OKACHEKE",

	thirdParty: {
		cardmarket: 817174
	},

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
