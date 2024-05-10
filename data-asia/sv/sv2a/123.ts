import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ストライク",
		'zh-tw': "飛天螳螂"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [123],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "切れ味 鋭い カマを 使って 草むらを 切り進む。 あまりに 速い 動きで 目が 追いつかない。",
		'zh-tw': "會用鋒利的鐮刀割開草叢前進。因為動作實在太快， 甚至無法用肉眼看清。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "アシストスラッシュ",
			'zh-tw': "輔助斬"
		},

		damage: 20,

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を1枚選び、ベンチポケモンにつける。",
			'zh-tw': "從自己的棄牌區選擇1張「基本【草】能量」卡，附於備戰寶可夢身上。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "スライスブレード",
			'zh-tw': "利刃切割"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card