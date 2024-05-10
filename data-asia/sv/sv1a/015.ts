import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "カエンジシ",
		'zh-tw': "火炎獅"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [668],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "群れの メスが 協力して 獲物を 仕留める。 メスたちの おかげで 群れが 飢えないのだ。",
		'zh-tw': "雌性們會合力捕殺獵物，所以群體內不會發生 有誰挨餓的狀況。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "こがす",
			'zh-tw': "灼熱"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かけぬける",
			'zh-tw': "飛馳"
		},

		damage: 60,

		effect: {
			ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card