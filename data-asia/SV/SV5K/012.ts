import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ウガツホムラex",
		'zh-tw': "破空焰ex",
		th: "เพลิงทะลวงex",
		ko: "꿰뚫는화염 ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ヒートブラスト",
				'zh-tw': "高溫爆破",
				th: "ฮีทบลาสต์",
				ko: "히트블라스트",
			},
			damage: 60,
			cost: ["Fire", "Colorless"],
		},
		{
			name: {
				ja: "れっかばくしん",
				'zh-tw': "烈火爆進",
				th: "ไฟลุกบุกทะลวง",
				ko: "열화맥진",
			},
			damage: 260,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このワザを使ったなら、このポケモンは、バトル場をはなれるまで「れっかばくしん」が使えない。",
				'zh-tw': "若使用了這個招式，則這隻寶可夢離開戰鬥場前無法使用「烈火爆進」。",
				th: "ถ้าใช้ท่าต่อสู้นี้แล้ว โปเกมอนนี้ จะใช้ [ไฟลุกบุกทะลวง] ไม่ได้จนกว่าจะออกจากตำแหน่งต่อสู้",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752765,
				tcgplayer: 568346,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [1020],

	suffix: "EX",
};

export default card;
