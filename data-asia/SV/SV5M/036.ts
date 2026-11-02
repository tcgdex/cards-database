import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノカシラex",
		'zh-tw': "鐵頭殼ex",
		th: "หัวเหล็กex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "コバルトコマンド",
				'zh-tw': "鈷藍指令",
				th: "โคบอลต์คอมมานด์",
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の「未来」のポケモン（「テツノカシラex」をのぞく）が使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
				'zh-tw': "只要這隻寶可夢在場上，自己的「未來」寶可夢（「鐵頭殼ex」除外）使用的招式，對對手的戰鬥寶可夢造成的傷害「+20」點。",
				th: "ตราบใดที่โปเกมอนนี้ยังอยู่ แดเมจของท่าต่อสู้ที่โปเกมอน [อนาคต] ฝ่ายเรา (ยกเว้น [หัวเหล็ก【ex】]) ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+20]",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ツインショーテル",
				'zh-tw': "雙刃劍",
				th: "ดาบโค้งคู่",
			},
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン2匹に、それぞれ50ダメージ。このワザのダメージは、弱点・抵抗力と、ダメージを受けるポケモンにかかっている効果を計算しない。",
				'zh-tw': "對手的2隻寶可夢各受到50點傷害。這個招式的傷害不計算弱點・抵抗力與受到傷害的寶可夢身上的附加效果。",
				th: "โปเกมอนฝ่ายตรงข้าม 2 ตัว จะได้รับแดเมจตัวละ 50 แดเมจของท่าต่อสู้นี้ จะไม่นำจุดอ่อน ความต้านทาน และเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนที่ได้รับแดเมจมาคิด",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752917,
				tcgplayer: 566187,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [1023],

	suffix: "EX",
};

export default card;
