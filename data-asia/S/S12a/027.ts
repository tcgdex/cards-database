import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "オリジンパルキアV",
		'zh-tw': "起源帕路奇亞V",
		th: "พัลเกียดั้งเดิมV",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "りょういきしはい",
				'zh-tw': "領域支配",
				th: "ปกครองอาณาเขต",
			},
			cost: ["Water"],
			effect: {
				ja: "自分の山札からスタジアムを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張競技場卡，在給對手看過後加入手牌。並且重洗牌庫。",
				th: "เลือกการ์ดสเตเดียม 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			},
		},
		{
			name: {
				ja: "ハイドロブレイク",
				'zh-tw': "水炮破壞",
				th: "ไฮโดรเบรก",
			},
			damage: 200,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
				th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687507,
				tcgplayer: 571565,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [484],
};

export default card;
