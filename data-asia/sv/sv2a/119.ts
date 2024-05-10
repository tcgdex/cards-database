import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "アズマオウ",
		'zh-tw': "金魚王"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [119],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "ツノで 川底の 岩を くりぬき 巣をつくるのは 産みつけた タマゴが 流されないように するためだ。",
		'zh-tw': "金魚王之所以會用角挖穿河底的岩石來築巢，是為了 防止產下的卵被水流沖走。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "きままにおよぐ",
			'zh-tw': "隨興游水"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "アクアホーン",
			'zh-tw': "水之角擊"
		},

		damage: "60+",

		effect: {
			ja: "このポケモンについているエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card