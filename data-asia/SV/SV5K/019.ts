import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキハミ",
		'zh-tw': "雪吞蟲",
		th: "ยูกิฮามิ",
		ko: "누니머기",
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "エサは 地面に 積もった 雪。 柔らかな 新雪を 好み 山頂 目指して 食べ進む。",
		'zh-tw': "地面的積雪是牠的主食。對新下的鬆軟白雪情有獨鍾， 會朝著山頂一路吃過去。",
		th: "หิมะที่สุมอยู่บนพื้นคืออาหาร โปรดปรานหิมะสดใหม่ที่มีความนิ่ม โดยจะกินไปเรื่อย ๆ พลางมุ่งหน้าสู่ยอดเขา",
		ko: "땅에 쌓인 눈이 먹이다. 새로 내린 부드러운 눈을 좋아해서 산꼭대기를 향해 먹으며 움직인다.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "こなゆき",
				'zh-tw': "細雪",
				th: "ผงหิมะ",
				ko: "눈싸라기",
			},
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
				ko: "상대의 배틀 포켓몬을 잠듦으로 만든다.",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752780,
				tcgplayer: 568353,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [872],
};

export default card;
