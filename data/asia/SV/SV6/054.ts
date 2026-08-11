import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シロデスナ",
		'zh-tw': "噬沙堡爺",
		'th-th': "ชิโรเดซึนะ",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		'ja-jp': "生命エネルギーを 吸い取り 干からびた ものたちの 骨を 腕の へこみから 発射する。",
		'zh-tw': "會把對手的生命能量 吸得精光，然後把骨骸 從臂上的凹洞發射出去。",
		'th-th': "สูบพลังชีวิตจนหมด แล้วพ่นกระดูกที่เหี่ยวแห้งของเหยื่อออกมาจากหลุมที่แขน",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "すなかけ",
				'zh-tw': "潑沙",
				'th-th': "สาดทราย",
			},
			damage: 60,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。",
				'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนที่ได้รับท่าต่อสู้นี้จะใช้ท่าต่อสู้ ฝ่ายตรงข้ามทอยเหรียญ 1 ครั้ง ถ้าออกก้อยท่าต่อสู้นั้นจะล้มเหลว",
			},
		},
		{
			name: {
				'ja-jp': "サンドホロウ",
				'zh-tw': "沙之陰森",
				'th-th': "แซนด์ฮอลโลว์",
			},
			damage: 150,
			cost: ["Psychic", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767147,
				tcgplayer: 568044,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "スナバァ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Common",
	dexId: [770],
};

export default card;
