import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
		'zh-tw': "皮卡丘",
		th: "พิคาชู",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "何匹かが 集まっていると そこに 猛烈な 電気が 溜まり 稲妻が 落ちることがあるという。",
		'zh-tw': "據說同一處有好幾隻的時候，那裡就會凝集起強烈的電力， 還可能造成閃電落於該處。",
		th: "ว่ากันว่าพอรวมตัวกันหลาย ๆ ตัว พลังงานไฟฟ้าแรงสูงจะสะสมจนอาจมีฟ้าผ่าลงมา",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "でんじスパーク",
				'zh-tw': "電磁電光",
				th: "อิเล็กโทรแมกเนติกสปาร์ก",
			},
			cost: ["Lightning"],
			effect: {
				ja: "相手のポケモン1匹に、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻寶可夢受到10點傷害。[在備戰區不計算弱點・抵抗力。]",
				th: "ทำแดเมจ 10 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752904,
				tcgplayer: 566174,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [25],
};

export default card;
