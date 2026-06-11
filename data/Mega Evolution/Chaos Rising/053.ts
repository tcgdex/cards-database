import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "The foul fluid from its rear is so revolting that it can make people feel queasy up to a mile and a quarter away.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886445,
				tcgplayer: 693549
			}
		},
	],

	name: {
		en: "Stunky",
		fr: "Moufouette",
		es: "Stunky",
		'es-mx': "Stunky",
		de: "Skunkapuh",
		it: "Stunky",
		pt: "Stunky"
	},

	illustrator: "Nobuhiro Imagawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [434],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			'es-mx': "Arañazo",
			de: "Kratzer",
			it: "Graffio",
			pt: "Arranhão"
		},

		cost: ["Darkness"],
		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card