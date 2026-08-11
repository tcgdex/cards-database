import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
		'es-es': "Drifloon",
		'it-it': "Drifloon",
		'de-de': "Driftlon",
		'pt-br': "Drifloon",
		'ko-kr': "흔들풍손"
	},

	illustrator: "kodama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [425],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "It is whispered that any child who mistakes Drifloon for a balloon and holds on to it could wind up missing.",
		'fr-fr': "On dit que les jeunes enfants qui agrippent Baudrive après\nl'avoir pris pour un ballon disparaissent sans laisser de traces.",
		'es-es': "Se dice que a veces desaparecen niños que\nagarran un Drifloon pensando que es un globo.",
		'it-it': "Si dice che i bambini piccoli possano scomparire nel nulla\nse tengono un Drifloon scambiandolo per un palloncino.",
		'de-de': "So manches kleine Kind soll schon verschwunden\nsein, weil es ein Driftlon festhielt, das es mit\neinem Ballon verwechselt hatte.",
		'pt-br': "Diz-se por aí que se uma criança confundir Drifloon\ncom um balão e o segurar, poderá acabar desaparecendo.",
		'ko-kr': "풍선으로 착각해 흔들풍손을\n가지고 있었던 어린아이가\n사라지는 경우가 있다고 한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'de-de': "Ramme",
			'pt-br': "Aríete",
			'ko-kr': "부딪치기"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card