import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "コレクレー",
		'zh-tw': "索財靈"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	dexId: [999],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "およそ１５００年前 宝箱の中で 生まれた。 宝を 盗む 不埒者の 生気を 吸い取る。",
		'zh-tw': "約１５００年前出生在寶箱裡。如果有惡棍打算偷走寶藏， 就會被牠吸走精氣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はこにかくれる",
			'zh-tw': "藏入盒子"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		}
	}, {
		cost: ["Colorless"],

		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card