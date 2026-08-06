import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Cyndaquil",
		fr: "Héricendre",
		de: "Feurigel",
		it: "Cyndaquil",
		es: "Cyndaquil",
		pt: "Cyndaquil",
		'es-mx': "Cyndaquil"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [155],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
        	en: "Tackle",
        	fr: "Charge",
        	de: "Tackle",
        	it: "Azione",
        	es: "Placaje",
        	pt: "Investida",
        	'es-mx': "Tacleada"
        },

		damage: 40
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
				cardmarket: 886616,
				tcgplayer: 699871
			}
		},
	],
}

export default card
