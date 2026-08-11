import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チルット",
		'zh-tw': "青綿鳥",
		'th-th': "ทิลท์โท",
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'ja-jp': "真綿の ような 翼の 手入れは 絶対に 欠かさない。汚れると 水浴びをして きれいに 洗う。",
		'zh-tw': "從不疏於打理絲綿般的翅膀。一弄髒就會到水裡洗乾淨。",
		'th-th': "คอยดูแลปีกที่เหมือนกับใยไหมอยู่ตลอดไม่เคยขาด พอสกปรกก็จะไปอาบน้ำล้างตัวจนสะอาด",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ふいをつく",
				'zh-tw': "偷襲",
				'th-th': "จู่โจมกะทันหัน",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
				'th-th': "ทอยเหรียญ 1 ครั้ง ถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687682,
				tcgplayer: 571658,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577488,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [333],
};

export default card;
