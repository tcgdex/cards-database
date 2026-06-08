import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

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

	thirdParty: {
		tcgplayer: 693549,
		cardmarket: 886445
	}
}

export default card