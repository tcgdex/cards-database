import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Ponyta",
		fr: "Ponyta",
		es: "Ponyta",
		it: "Ponyta",
		de: "Ponita",
		'pt-br': "Ponyta",
		ko: "포니타"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			es: "Llama",
			it: "Fiammata",
			de: "Flackern",
			'pt-br': "Chama",
			ko: "불꽃"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It can't run properly when it's newly born. As it races around with others of its kind, its legs grow stronger.",
		fr: "À la naissance, il ne court pas très vite. C'est en faisant\nla course avec ses camarades qu'il se muscle les jambes.",
		es: "Al nacer es un poco lento, pero va\nfortaleciendo las patas paulatinamente\nal disputar carreras con sus congéneres.",
		it: "Appena nato non è un buon corridore, ma col tempo\nirrobustisce le sue zampe rincorrendo i suoi simili.",
		de: "Nach der Geburt fällt ihm das Laufen schwer.\nDie Wettrennen, die es sich mit seinen Freunden\nliefert, stärken jedoch seine Beinmuskulatur.",
		'pt-br': "Nasce sem saber correr muito bem, mas, à medida\nque corre com outros da sua espécie, suas pernas\nvão ficando mais fortes.",
		ko: "갓 태어났을 때는 달리는 것이 서툴다.\n동료와 달리기 경주를 하는 사이에\n하반신이 튼튼하게 성장한다."
	}
}

export default card
