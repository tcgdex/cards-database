import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "コノヨザル",
		'zh-tw': "棄世猴"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [979],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "心に 秘めた 怒りのパワーを こぶしに 込めて 叩きつけると 相手を 骨の髄から 砕く。",
		'zh-tw': "會將隱藏在心中的憤怒之力注入拳頭發動攻擊，其威力 會深入骨髓，將對手打個粉碎。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ふんどのこぶし",
			'zh-tw': "憤怒之拳"
		},

		damage: 70,

		effect: {
			ja: "相手がすでにとったサイドの枚数×70ダメージ。",
			'zh-tw': "造成對手已經獲得的獎賞卡的張數×70點傷害。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ダイナマイトパンチ",
			'zh-tw': "炸藥拳"
		},

		damage: 170,

		effect: {
			ja: "このポケモンにも50ダメージ。",
			'zh-tw': "這隻寶可夢也受到50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card