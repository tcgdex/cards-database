import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "レジスチル",
		'zh-tw': "雷吉斯奇魯"
	},

	illustrator: "hatachu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [379],
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "伸び縮みする 柔らかさも あるが どんな 金属よりも 頑丈な 不思議な 物質で できている。",
		'zh-tw': "構成牠身體的神奇物質具有能夠伸縮的柔軟性， 但卻比任何金屬都還要堅韌。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "レジゲート",
			'zh-tw': "雷吉之門"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ヘビーボンバー",
			'zh-tw': "重磅衝撞"
		},

		effect: {
			ja: "相手のバトルポケモンのにげるためのエネルギーの数×50ダメージぶん、このワザのダメージは小さくなる。",
			'zh-tw': "減少對手的戰鬥寶可夢【撤退】所需的能量的數量×50點傷害。"
		},

		damage: "220-",
		cost: ["Metal", "Metal", "Colorless"]
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
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651015,
				tcgplayer: 569802,
				cardtrader: 234113,
			},
		},
	]
}

export default card