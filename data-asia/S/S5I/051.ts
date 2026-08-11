import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトツキ",
		'zh-tw': "獨劍鞘",
		th: "ฮิโตทซึกิ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "剣の 鍔の 青い 目玉が ヒトツキの 本体。 古びた 布で 人の 生気を 吸い取る。",
		'zh-tw': "獨劍鞘護手上的藍色眼珠是牠的本體。會用陳舊的布吸取人類的精氣。",
		th: "ตาสีฟ้าบนกระบังดาบคือตัวจริงของฮิโตทซึกิ ดูดเอาพลังชีวิตของคนไปด้วยผ้าเก่า ๆ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "おそいかかる",
				'zh-tw': "伏擊",
				th: "ซุ่มโจมตี",
			},
			damage: "10+",
			cost: ["Metal"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
				th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 30",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533477,
				tcgplayer: 569000,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [679],
};

export default card;
