import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'es-es': "Ponyta",
		'it-it': "Ponyta",
		'de-de': "Ponita",
		'pt-br': "Ponyta",
		'ko-kr': "포니타"
	},

	illustrator: "Uta",
	category: "Pokemon",

	dexId: [77],
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'it-it': "Fiammata",
			'de-de': "Flackern",
			'pt-br': "Chama",
			'ko-kr': "불꽃"
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
		'en-us': "It can't run properly when it's newly born. As it races around with others of its kind, its legs grow stronger.",
		'fr-fr': "À la naissance, il ne court pas très vite. C'est en faisant\nla course avec ses camarades qu'il se muscle les jambes.",
		'es-es': "Al nacer es un poco lento, pero va\nfortaleciendo las patas paulatinamente\nal disputar carreras con sus congéneres.",
		'it-it': "Appena nato non è un buon corridore, ma col tempo\nirrobustisce le sue zampe rincorrendo i suoi simili.",
		'de-de': "Nach der Geburt fällt ihm das Laufen schwer.\nDie Wettrennen, die es sich mit seinen Freunden\nliefert, stärken jedoch seine Beinmuskulatur.",
		'pt-br': "Nasce sem saber correr muito bem, mas, à medida\nque corre com outros da sua espécie, suas pernas\nvão ficando mais fortes.",
		'ko-kr': "갓 태어났을 때는 달리는 것이 서툴다.\n동료와 달리기 경주를 하는 사이에\n하반신이 튼튼하게 성장한다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
