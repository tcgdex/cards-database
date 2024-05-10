import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "キングドラ",
		'zh-tw': "刺龍王"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [230],
	hp: 150,
	types: ["Water"],

	description: {
		ja: "剥がれた ウロコは 王族へ 献上されるほど 上質で 深みのある 輝きを もつ。",
		'zh-tw': "脫落的鱗片光澤高雅有深度，甚至被拿去 獻給王族作為貢品。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ワールタイド",
			'zh-tw': "旋潮"
		},

		effect: {
			ja: "自分の山札を上から6枚オモテにして、その中にあるエネルギーの枚数×60ダメージを、相手のポケモン1匹に与える。オモテにしたエネルギーはトラッシュし、残りのカードは山札にもどして切る。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "將自己的牌庫上方6張卡翻到正面，對對手的1隻寶可夢，造成其中能量卡的張數×60點傷害。將翻到正面的能量卡丟棄，將剩餘卡放回牌庫並重洗。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "ハイドロスプラッシュ",
			'zh-tw': "水炮濺射"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card