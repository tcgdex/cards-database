import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'es-es': "Machoke",
		'it-it': "Machoke",
		'de-de': "Maschock",
		'pt-br': "Machoke",
		'ko-kr': "근육몬"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [67],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Machop"
	},

	description: {
		'en-us': "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
		'fr-fr': "Son corps est si puissant qu'il lui faut\nune ceinture pour maîtriser sa force.",
		'es-es': "Su musculoso cuerpo es tan fuerte que usa un\ncinto antifuerza para controlar sus movimientos.",
		'it-it': "Il suo corpo muscoloso è così forte che usa\nuna cintura per contenere la sua potenza.",
		'de-de': "Dieses Pokémon ist superstark. Es kann sich nur\nmit einem kraftregulierenden Gürtel bewegen.",
		'pt-br': "Sua massa muscular é tão poderosa que ele\nprecisa usar um cinto de economia de energia\npara controlar seus movimentos.",
		'ko-kr': "엄청나게 강한 육체를 지녔기 때문에\n파워 세이브 벨트를 차서\n힘을 제어하고 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Strength",
			'fr-fr': "Force",
			'es-es': "Fuerza",
			'it-it': "Forza",
			'de-de': "Stärke",
			'pt-br': "Força",
			'ko-kr': "괴력"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card