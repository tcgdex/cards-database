import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "スコヴィラン",
		'zh-tw': "狠辣椒"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [952],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "グリーンヘッドは 辛み成分に 脳が 刺激されて 凶暴化。 暴れだすと 手がつけられない。",
		'zh-tw': "綠色的頭因為腦部受到了辣味成分的刺激而變得凶暴。 一旦暴怒起來就會一發不可收拾。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ホットバイト",
			'zh-tw': "滾燙啃咬"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "げきからヒーハー",
			'zh-tw': "尖叫辣"
		},

		damage: "90+",

		effect: {
			ja: "このポケモンにエネルギーがついているなら、90ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上附有【火】能量卡，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card