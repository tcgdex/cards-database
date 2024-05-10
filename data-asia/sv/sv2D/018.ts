import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ライチュウ",
		'zh-tw': "雷丘"
	},

	illustrator: "Teeziro",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [26],
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "尻尾が アースの 役目をはたして 電気を 地面に 逃がすので 自分自身は しびれたりしない。",
		'zh-tw': "尾巴會發揮接地線的作用把電氣導入地面， 所以自己不會被電得發麻。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "エレキチャージ",
			'zh-tw': "電氣充能"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張「基本【雷】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "10まんボルト",
			'zh-tw': "十萬伏特"
		},

		damage: 200,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card