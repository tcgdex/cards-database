import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ランプラー",
		'zh-tw': "燈火幽靈",
		th: "แลมพูลา",
	},

	illustrator: "Rond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "魂を 吸いとり 火を灯す。 人が 死ぬのを 待つため 病院を うろつくようになった。",
		'zh-tw': "吸取靈魂來點亮燈火。 為了等待人類死去， 而在醫院裡徘徊遊蕩。",
		th: "สูบวิญญาณแล้วนำมาจุดไฟ มักวนเวียนอยู่แถวโรงพยาบาลเพื่อรอให้มีคนเสียชีวิต",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ひだね",
				'zh-tw': "火種",
				th: "เชื้อไฟ",
			},
			damage: 20,
			cost: ["Fire"],
		},
		{
			name: {
				ja: "もえつくす",
				'zh-tw': "燃燒盡",
				th: "เผาเกลี้ยง",
			},
			damage: 60,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
				'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。",
				th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ ทั้งหมดที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767005,
				tcgplayer: 568010,
			},
		},
	],

	evolveFrom: {
		ja: "ヒトモシ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [608],
};

export default card;
