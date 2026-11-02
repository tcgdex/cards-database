import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノイサハex",
		'zh-tw': "鐵斑葉ex",
		th: "ใบด่างเหล็กex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ラピッドバーニア",
				'zh-tw': "迅速游標",
				th: "แรพพิดเวอร์เนียร์",
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。このポケモンをバトルポケモンと入れ替える。入れ替えた場合、自分の場のポケモンについているエネルギーを好きなだけ選び、このポケモンにつけ替える。",
				'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。將這隻寶可夢與戰鬥寶可夢互換。互換的情況下，選擇自己的場上寶可夢身上附加的任意數量的能量卡，改附於這隻寶可夢身上。",
				th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง สลับโปเกมอนนี้กับโปเกมอนบนตำแหน่งต่อสู้ เมื่อสลับแล้ว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราตามจำนวนที่ชอบ ย้ายมาติดกับโปเกมอนนี้",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "プリズムエッジ",
				'zh-tw': "稜鏡刀鋒",
				th: "ปริซึมเอดจ์",
			},
			damage: 180,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
				th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752897,
				tcgplayer: 566167,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [1010],

	suffix: "EX",
};

export default card;
