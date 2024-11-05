import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "薩戮德",
		'zh-cn': "薩戮德",
		ja: "ザルード"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "集結成群生活在密林裡。 攻擊性很強，令棲息在 森林的寶可夢們畏懼不已。",
		'zh-cn': "集結成群生活在密林裡。 攻擊性很強，令棲息在 森林的寶可夢們畏懼不已。",
		ja: "群れを つくり 密林で 暮らす。 とても 攻撃的で 森にすむ ポケモンたちから 恐れられている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "綠葉吸取",
			'zh-cn': "綠葉吸取",
			ja: "リーフドレイン"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「20」HP。",
			'zh-cn': "將這隻寶可夢恢復「20」HP。",
			ja: "このポケモンのHPを「20」回復する。"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "叢林鞭打",
			'zh-cn': "叢林鞭打",
			ja: "ジャングルウィップ"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢身上附加的能量卡全部放回手牌，增加80點傷害。",
			'zh-cn': "若希望，將這隻寶可夢身上附加的能量卡全部放回手牌，增加80點傷害。",
			ja: "のぞむなら、このポケモンについているエネルギーをすべて手札にもどし、80ダメージ追加。"
		},

		damage: "80＋",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [893]
}

export default card