import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [540],
	set: Set,

	name: {
		en: "Sewaddle",
		fr: "Larveyette",
		de: "Strawickl",
		it: "Sewaddle",
		pt: "Sewaddle",
		es: "Sewaddle",
		'es-mx': "Sewaddle"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bug Bite",
			fr: "Piqûre",
			de: "Käferbiss",
			it: "Coleomorso",
			pt: "Picada",
			es: "Picadura",
			'es-mx': "Picadura"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836071
	}
}

export default card