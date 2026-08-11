import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニャスパー",
		'zh-tw': "妙喵",
		'th-th': "เนียสเปอร์",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "プロレスラーを 吹きとばす ほどの サイコパワーを 内に 秘めているが コントロールできずに 困っている。",
		'zh-tw': "雖然擁有可以彈飛職業摔角選手的精神力量，卻因無法好好控制而感到煩惱。",
		'th-th': "ซ่อนพลังจิตไว้ข้างในซึ่งมีพลังมากถึงขนาดเป่านักมวยปล้ำให้กระเด็นไปได้ แต่ก็ลำบากเพราะควบคุมพลังไม่ได้",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ねんじる",
				'zh-tw': "祈求",
				'th-th': "อธิษฐาน",
			},
			damage: "20+",
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
				'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533347,
				tcgplayer: 568974,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [677],
};

export default card;
