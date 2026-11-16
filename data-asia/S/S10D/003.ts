import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "リーフィア",
		'zh-tw': "葉伊布"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [470],
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		ja: "イーブイ"
	},

	description: {
		ja: "体毛から 植物に似た 細胞 検出す。 硬き 尾は 大木を 一刀両断し 切れ味 名刀にも 勝る 得物なり。",
		'zh-tw': "從體毛中可檢出近似植物的細胞。 堅硬的尾部能將大樹一刀兩斷， 鋒利程度更勝名刀一籌。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "エナジーガーデン",
			'zh-tw': "能量花園"
		},

		effect: {
			ja: "自分の山札から、それぞれちがうタイプの基本エネルギーを3枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多3張各不同屬性的基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "はっぱサイクロン",
			'zh-tw': "葉子旋風"
		},

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650963,
				tcgplayer: 569758,
				cardtrader: 234069,
			},
		},
	]
}

export default card