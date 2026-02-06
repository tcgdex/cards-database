import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "破破舵輪",
		'zh-cn': "破破舵輪",
		ja: "ダダリン"
	},

	illustrator: "Mori Yuu",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "在海底飄蕩的海藻 吸收了沉船的零件後 轉生而成的幽靈寶可夢。",
		'zh-cn': "在海底飄蕩的海藻 吸收了沉船的零件後 轉生而成的幽靈寶可夢。",
		ja: "海底を 漂う 藻屑が 沈没船の 部品を 取りこんで ゴーストポケモンに 生まれ変わった。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "救援船錨",
			'zh-cn': "救援船錨",
			ja: "レスキューアンカー"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張寶可夢卡，在給對手看過後加入手牌。",
			'zh-cn': "從自己的棄牌區選擇最多2張寶可夢卡，在給對手看過後加入手牌。",
			ja: "自分のトラッシュからポケモンを2枚まで選び、相手に見せて、手札に加える。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "破壞船錨",
			'zh-cn': "破壞船錨",
			ja: "はかいのイカリ"
		},

		effect: {
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡丟棄。",
			'zh-cn': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡丟棄。",
			ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"
		},

		damage: 80,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [781],

	thirdParty: {
		cardmarket: 787564
	}
}

export default card