import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザVMAX",
		'zh-tw': "烈空坐VMAX",
		th: "เร็คควอซาVMAX",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "そうくうのはどう",
				'zh-tw': "蒼空波動",
				th: "คลื่นแห่งนภา",
			},
			effect: {
				ja: "自分の番に1回使える。自分の手札をすべてトラッシュし、山札を3枚引く。",
				'zh-tw': "在自己的回合時，可使用1次。將自己的手牌全部丟棄，從牌庫抽出3張卡。",
				th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ทิ้งการ์ดบนมือฝ่ายเราทั้งหมดที่ตำแหน่งทิ้งการ์ด แล้วจั่วการ์ด 3 ใบจากสำรับการ์ด",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ダイバースト",
				'zh-tw': "極巨爆破",
				th: "ไดเบิรสต์",
			},
			damage: "20+",
			cost: ["Fire", "Lightning"],
			effect: {
				ja: "このポケモンについている[炎]または[雷]タイプのどちらかの基本エネルギーを好きなだけトラッシュし、その枚数×80ダメージ追加。",
				'zh-tw': "將這隻寶可夢身上附加的【火】或者【雷】任一屬性的任意數量的基本能量卡丟棄，增加其張數×80點傷害。",
				th: "ทิ้งการ์ดพลังงานพื้นฐานอย่างใดอย่างหนึ่งระหว่างประเภท [ไฟ] หรือ [สายฟ้า] ที่ติดอยู่กับโปเกมอนนี้ตามจำนวนที่ชอบที่ตำแหน่งทิ้งการ์ด แดเมจจะเพิ่มตามจำนวนการ์ดนั้น x80",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687670,
				tcgplayer: 571646,
			},
		},
	],

	evolveFrom: {
		ja: "レックウザV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [384],
};

export default card;
