import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "リククラゲ",
		'zh-tw': "陸地水母"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [949],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "１０本の 触手で 絡みつき 養分を 吸い取って 苦しめる。 裾の ヒダは 珍味で 人気。",
		'zh-tw': "會用自己的１０根觸手纏住敵人，並吸取養分來折磨對方。 下擺的摺皺是很受歡迎的珍味佳餚。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ぶきみなしょくしゅ",
			'zh-tw': "不祥觸手"
		},

		damage: 30,

		effect: {
			ja: "のぞむなら、相手のバトルポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。",
			'zh-tw': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，改附於對手的備戰寶可夢身上。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "トリプルスマッシュ",
			'zh-tw': "三重粉碎"
		},

		damage: 80,

		effect: {
			ja: "コインを3回投げ、オモテの数×80ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×80點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card