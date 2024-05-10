import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミミズズ",
		'zh-tw': "拖拖蚓"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [968],
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "敵に 襲われると 体毛を こぶしのように 使い パンチの 嵐を お見舞いするのだ。",
		'zh-tw': "遭到攻擊的時候，會把體毛如拳頭般地使用， 朝著敵人奉上拳擊風暴。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "パンチ&ドロー",
			'zh-tw': "出拳&抽出"
		},

		damage: 20,

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "どたんばラッシュ",
			'zh-tw': "絕境衝刺"
		},

		damage: "90+",

		effect: {
			ja: "自分の山札の残り枚数が3枚以下なら、150ダメージ追加。",
			'zh-tw': "若自己的牌庫的剩餘張數為3張以下，則增加150點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card