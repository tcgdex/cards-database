import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "スナバァ",
		'zh-tw': "沙丘娃",
		th: "ซึนาบา",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "獲物の 目を 砂で 潰し その隙に 近づこうとするが 動きが 遅いので 逃げられる。",
		'zh-tw': "會用沙子攻擊獵物的眼睛後 趁機接近，但卻總是因為 行動緩慢而讓獵物逃走。",
		th: "สาดทรายเข้าตาเหยื่อแล้วอาศัยจังหวะนั้นขยับเข้าไปใกล้ ๆ แต่เพราะเคลื่อนไหวช้า เหยื่อเลยมักหนีไปได้",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "すなかけ",
				'zh-tw': "潑沙",
				th: "สาดทราย",
			},
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。",
				th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนที่ได้รับท่าต่อสู้นี้จะใช้ท่าต่อสู้ ฝ่ายตรงข้ามทอยเหรียญ 1 ครั้ง ถ้าออกก้อยท่าต่อสู้นั้นจะล้มเหลว",
			},
		},
		{
			name: {
				ja: "ホロウショット",
				'zh-tw': "陰森射擊",
				th: "ฮอลโลว์ช็อต",
			},
			damage: 30,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767146,
				tcgplayer: 568043,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [769],
};

export default card;
