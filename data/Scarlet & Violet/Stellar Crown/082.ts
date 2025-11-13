import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		en: "Lucario ex",
		fr: "Lucario-ex",
		es: "Lucario ex",
		it: "Lucario-ex",
		pt: "Lucario ex",
		de: "Lucario-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
		es: "Riolu",
		it: "Riolu",
		pt: "Riolu",
		de: "Riolu"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Low Kick",
			fr: "Balayage",
			es: "Patada Baja",
			it: "Colpo Basso",
			pt: "Rasteira",
			de: "Fußkick"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Aura Knuckle",
			fr: "Poing Aura",
			es: "Nudillo Aural",
			it: "Aurapugno",
			pt: "Punho de Aura",
			de: "Aurafaust"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "PLANETA Igarashi",

	thirdParty: {
		cardmarket: 785936
	}
}

export default card
