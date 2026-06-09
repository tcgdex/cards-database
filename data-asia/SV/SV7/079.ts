import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "東施喵",
		'zh-cn': "東施喵",
		ja: "ブニャット"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "即使是其他寶可夢的住所， 如果感覺很舒服的話， 就會當成自己的住所賴著不走。",
		'zh-cn': "即使是其他寶可夢的住所， 如果感覺很舒服的話， 就會當成自己的住所賴著不走。",
		ja: "ほかの ポケモンの 住処でも 居心地が 良ければ 居座って 自分の 住処に してしまう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "喵打滾",
			'zh-cn': "喵打滾",
			ja: "ごろにゃん"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			'zh-cn': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
		},

		damage: 80,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [432],

	thirdParty: {
		cardmarket: 779093
	}
}

export default card