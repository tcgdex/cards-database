import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴルバット",
		'zh-tw': "大嘴蝠",
		'th-th': "โกลแบท",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'ja-jp': "１度に ３００シーシーの 血液を 吸い取る。 あまりに たくさん 血を 吸って 飛べなくなることも ある。",
		'zh-tw': "一次能吸３００毫升的血液。有時會因為吸了太多的血，連飛都飛不起來。",
		'th-th': "จะดูดเลือด 300cc ต่อครั้ง บางครั้งก็ดูดเลือดมากไปจนบินไม่ได้",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ひっそりドロー",
				'zh-tw': "無聲抽出",
				'th-th': "แอบจั่ว",
			},
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を2枚引く。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫抽出2張卡。",
				'th-th': "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "エアスラッシュ",
				'zh-tw': "空氣斬",
				'th-th': "แอร์สแลช",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
				'th-th': "ทิ้งพลังงานที่ติดกับโปเกมอนนี้ 1 ลูกที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533417,
				tcgplayer: 568988,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ズバット",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [42],
};

export default card;
