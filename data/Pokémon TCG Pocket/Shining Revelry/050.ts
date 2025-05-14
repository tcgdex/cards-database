import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Shroodle",
		fr: "Gribouraigne",
		es: "Shroodle",
		it: "Shroodle",
		de: "Sproxi",
		'pt-br': "Shroodle",
		ko: "땃쭈르"
	},

	illustrator: "Krgc",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "Though usually a mellow Pokémon, it will sink its sharp, poison-soaked front teeth into any that anger it, causing paralysis in the object of its ire.",
		fr: "Ce Pokémon est d'un naturel doux, mais lorsqu'il\nse met en colère, il mord à l'aide de ses incisives\nacérées et imprégnées de venin paralysant.",
		es: "Es manso, pero muerde y paraliza a quien lo enfada\ncon sus afilados incisivos impregnados de toxinas.",
		it: "È di natura mite, ma se qualcuno lo\nfa arrabbiare lo morde con gli incisivi\nimpregnati di un veleno paralizzante.",
		de: "Wer dieses friedfertige Pokémon verärgert,\nwird durch einen Biss mit seinen scharfen,\ngiftgetränkten Schneidezähnen gelähmt.",
		'pt-br': "Apesar de normalmente ser manso, este Pokémon finca\nseus dentes frontais afiados e venenosos em\nqualquer um que o irritar, causando paralisia.",
		ko: "온화하지만 화가 나게 하면\n독이 밴 날카로운 앞니로 물어서\n상대를 마비시킨다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			de: "Nagen",
			'pt-br': "Roída",
			ko: "갉기"
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