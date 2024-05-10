import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "スナバァ",
		'zh-tw': "沙丘娃"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Asako Ito",
	dexId: [769],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "獲物の 目を 砂で 潰し その隙に 近づこうとするが 動きが 遅いので 逃げられる。",
		'zh-tw': "會用沙子攻擊獵物的眼睛後 趁機接近，但卻總是因為 行動緩慢而讓獵物逃走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "すなかけ",
			'zh-tw': "潑沙"
		},

		damage: 10,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ホロウショット",
			'zh-tw': "陰森射擊"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card