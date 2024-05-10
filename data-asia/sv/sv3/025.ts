import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ガマゲロゲ",
		'zh-tw': "蟾蜍王"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [537],
	hp: 170,
	types: ["Water"],

	description: {
		ja: "コブが 起こす バイブレーションが マッサージに 良いと 老人に 大人気の ポケモンだ。",
		'zh-tw': "在老年人之間廣受歡迎。因為他們覺得牠身上的瘤發出的震動拿來按摩剛剛好。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ブルブルエリア",
			'zh-tw': "抖抖地帶"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンは、ワザを使うためのエネルギーが、エネルギー1個ぶん多くなる。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢使用招式所需的能量增加1個【無】能量。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "エコーボイス",
			'zh-tw': "回聲"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンの「エコーボイス」のダメージは「+100」される。",
			'zh-tw': "在下個自己的回合，這隻寶可夢「回聲」的傷害「+100」點。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card