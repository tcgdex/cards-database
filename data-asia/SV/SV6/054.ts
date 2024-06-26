import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "シロデスナ",
		'zh-tw': "噬沙堡爺",
		th: "ชิโรเดซึนะ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Uta",
	dexId: [770],
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "生命エネルギーを 吸い取り 干からびた ものたちの 骨を 腕の へこみから 発射する。",
		'zh-tw': "會把對手的生命能量 吸得精光，然後把骨骸 從臂上的凹洞發射出去。",
		th: "สูบพลังชีวิตจนหมด แล้วพ่นกระดูกที่เหี่ยวแห้งของเหยื่อออกมาจากหลุมที่แขน"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "すなかけ",
			'zh-tw': "潑沙",
			th: "สาดทราย"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนที่ได้รับท่าต่อสู้นี้จะใช้ท่าต่อสู้ ฝ่ายตรงข้ามทอยเหรียญ 1 ครั้ง ถ้าออกก้อยท่าต่อสู้นั้นจะล้มเหลว"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "サンドホロウ",
			'zh-tw': "沙之陰森",
			th: "แซนด์ฮอลโลว์"
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card