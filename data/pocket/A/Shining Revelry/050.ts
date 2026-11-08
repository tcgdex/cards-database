import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Shroodle",
		'fr-fr': "Gribouraigne",
		'es-es': "Shroodle",
		'it-it': "Shroodle",
		'de-de': "Sproxi",
		'pt-br': "Shroodle",
		'ko-kr': "땃쭈르"
	},

	illustrator: "Krgc",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [944],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "Though usually a mellow Pokémon, it will sink its sharp, poison-soaked front teeth into any that anger it, causing paralysis in the object of its ire.",
		'fr-fr': "Ce Pokémon est d'un naturel doux, mais lorsqu'il\nse met en colère, il mord à l'aide de ses incisives\nacérées et imprégnées de venin paralysant.",
		'es-es': "Es manso, pero muerde y paraliza a quien lo enfada\ncon sus afilados incisivos impregnados de toxinas.",
		'it-it': "È di natura mite, ma se qualcuno lo\nfa arrabbiare lo morde con gli incisivi\nimpregnati di un veleno paralizzante.",
		'de-de': "Wer dieses friedfertige Pokémon verärgert,\nwird durch einen Biss mit seinen scharfen,\ngiftgetränkten Schneidezähnen gelähmt.",
		'pt-br': "Apesar de normalmente ser manso, este Pokémon finca\nseus dentes frontais afiados e venenosos em\nqualquer um que o irritar, causando paralisia.",
		'ko-kr': "온화하지만 화가 나게 하면\n독이 밴 날카로운 앞니로 물어서\n상대를 마비시킨다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'de-de': "Nagen",
			'pt-br': "Roída",
			'ko-kr': "갉기"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card