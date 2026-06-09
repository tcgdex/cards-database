import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "盔甲鳥",
		'zh-cn': "盔甲鳥",
		ja: "エアームド"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'zh-tw': "由於脫落的羽毛又薄 又銳利，據說以前曾 被當成劍來使用。",
		'zh-cn': "由於脫落的羽毛又薄 又銳利，據說以前曾 被當成劍來使用。",
		ja: "抜け落ちた 羽根は 薄く 鋭いので 刀として 使われていたことも あったらしい。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鋼翼",
			'zh-cn': "鋼翼",
			ja: "はがねのつばさ"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			'zh-cn': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [227],

	thirdParty: {
		cardmarket: 787594
	}
}

export default card