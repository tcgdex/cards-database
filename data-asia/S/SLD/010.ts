import { Card } from "../../../interfaces"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胡帕",
		ja: "フーパ"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "用圓環將喜歡的東西傳送到秘密的住處。會鑽進圓環瞬間移動。",
		ja: "気に入った ものを リングを 使い 秘密の 住処へ 集めている。 リングを 潜って テレポートする。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "魔神手",
			ja: "まじんのて"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【惡】能量卡，附於自己的寶可夢身上。並且重洗牌庫。",
			ja: "自分の山札からエネルギーを1枚選び、自分のポケモンにつける。そして山札を切る。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "暴君黑洞",
			ja: "タイラントホール"
		},

		damage: 100,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [720]
}

export default card