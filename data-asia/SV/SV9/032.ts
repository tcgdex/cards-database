import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ナンジャモのタイカイデン",
		'zh-tw': "奇樹的大電海燕",
		'zh-cn': "奇樹的大電海燕"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [941],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "のど袋を ふくらませて 電気を 増幅させる。 風に 乗って １日で ７００キロを 飛行する。",
		'zh-tw': "會膨脹喉囊來增強電力。 可以乘著風在１天內 就飛上７００公里。",
		'zh-cn': "會膨脹喉囊來增強電力。 可以乘著風在１天內 就飛上７００公里。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フラッシュドロー",
			'zh-tw': "閃光抽出",
			'zh-cn': "閃光抽出"
		},

		effect: {
			ja: "自分の番に、このポケモンについている「基本エネルギー」を1個トラッシュするなら、1回使える。自分の手札が6枚になるように、山札を引く。",
			'zh-tw': "在自己的回合，若將1個這隻寶可夢身上附加的「基本【雷】能量」丟棄，則可使用1次。從牌庫抽卡直到自己的手牌滿6張為止。",
			'zh-cn': "在自己的回合，若將1個這隻寶可夢身上附加的「基本【雷】能量」丟棄，則可使用1次。從牌庫抽卡直到自己的手牌滿6張為止。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "マッハボルト",
			'zh-tw': "音速伏特",
			'zh-cn': "音速伏特"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card