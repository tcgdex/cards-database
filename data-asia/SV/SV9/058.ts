import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "バンギラス",
		'zh-tw': "班基拉斯",
		'zh-cn': "班基拉斯"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [248],
	hp: 190,
	types: ["Darkness"],

	description: {
		ja: "あたりの 地形を 変えるぐらい 朝飯前の 力持ち。 まわりを 気にしない ふてぶてしさ。",
		'zh-tw': "即便是改變周圍的地形 也是小事一樁的大力士。 個性狂妄，不顧周遭的感受。",
		'zh-cn': "即便是改變周圍的地形 也是小事一樁的大力士。 個性狂妄，不顧周遭的感受。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いあつのがんこう",
			'zh-tw': "威迫目光",
			'zh-cn': "威迫目光"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手は手札からグッズを出して使えない。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手無法從手牌使出物品卡。",
			'zh-cn': "只要這隻寶可夢在戰鬥場上，對手無法從手牌使出物品卡。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "クラックストンプ",
			'zh-tw': "斷裂頓足",
			'zh-cn': "斷裂頓足"
		},

		damage: 150,

		effect: {
			ja: "相手の山札を上から2枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方2張卡丟棄。",
			'zh-cn': "將對手的牌庫上方2張卡丟棄。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card