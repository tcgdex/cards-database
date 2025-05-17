import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Machoke",
		fr: "Machopeur",
		es: "Machoke",
		it: "Machoke",
		de: "Maschock",
		'pt-br': "Machoke",
		ko: "근육몬"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machop"
	},

	description: {
		en: "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
		fr: "Son corps est si puissant qu'il lui faut\nune ceinture pour maîtriser sa force.",
		es: "Su musculoso cuerpo es tan fuerte que usa un\ncinto antifuerza para controlar sus movimientos.",
		it: "Il suo corpo muscoloso è così forte che usa\nuna cintura per contenere la sua potenza.",
		de: "Dieses Pokémon ist superstark. Es kann sich nur\nmit einem kraftregulierenden Gürtel bewegen.",
		'pt-br': "Sua massa muscular é tão poderosa que ele\nprecisa usar um cinto de economia de energia\npara controlar seus movimentos.",
		ko: "엄청나게 강한 육체를 지녔기 때문에\n파워 세이브 벨트를 차서\n힘을 제어하고 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Strength",
			fr: "Force",
			es: "Fuerza",
			it: "Forza",
			de: "Stärke",
			'pt-br': "Força",
			ko: "괴력"
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