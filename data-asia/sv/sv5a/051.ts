import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "カビゴン",
		'zh-tw': "卡比獸"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [143],
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "胃袋の 消化液は どんな 毒も 消化できる。 落ちているものを 食べても 平気。",
		'zh-tw': "胃裡的消化液能夠消化掉 所有的毒。就算吃下掉在 地上的東西也沒問題。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はらごしらえ",
			'zh-tw': "吃飽先"
		},

		effect: {
			ja: "自分の手札からエネルギーを1枚選び、このポケモンにつける。その後、このポケモンのHPを「60」回復する。",
			'zh-tw': "從自己的手牌選擇1張能量卡，附於這隻寶可夢身上。然後，將這隻寶可夢恢復「60」HP。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヘビーインパクト",
			'zh-tw': "重磅衝擊"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card