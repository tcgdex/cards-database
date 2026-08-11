import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リザードンVSTAR",
		'zh-tw': "噴火龍VSTAR",
		'th-th': "ลิซาร์ดอนVSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				'ja-jp': "ばくれつファイヤー",
				'zh-tw': "爆裂火焰",
				'th-th': "เพลิงระเบิด",
			},
			damage: "130+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにダメカンがのっているなら、100ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加100點傷害。",
				'th-th': "ถ้าโปเกมอนนี้มีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 100",
			},
		},
		{
			name: {
				'ja-jp': "スターブレイズ",
				'zh-tw': "[VSTAR力量]星星火焰",
				'th-th': "[พลังVSTAR] สตาร์เบลซ",
			},
			damage: 320,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。[對戰中，己方只可使用1次【VSTAR】力量。]",
				'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด [ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น]",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687494,
				tcgplayer: 571552,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "リザードンV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [6],
};

export default card;
