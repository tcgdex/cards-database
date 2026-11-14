import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorina",
		fr: "Nidorina",
		de: "Nidorina",
		es: "Nidorina",
		it: "Nidorina",
		pt: "Nidorina",
		'es-mx': "Nidorina"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			'es-mx': "Tacleada"
		},

		damage: 60,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 728031,
				cardmarket: 918879
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 728031,
				cardmarket: 918879
			}
		}
	],
}

export default card