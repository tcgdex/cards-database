import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "コフキムシ",
		'zh-tw': "粉蝶蟲",
		th: "โคฟูคิมูชิ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "体を 覆う 粉が 体温を 調節するので どんな 気候や 風土の 地域でも 暮らせる。",
		'zh-tw': "覆蓋身體的粉末能夠調節體溫。無論在任何氣候或水土下都能生活。",
		th: "ผงที่ปกคลุมร่างกายจะคอยปรับอุณหภูมิในร่างกาย จึงสามารถอาศัยอยู่ได้ในทุกสภาพอากาศและทุกภูมิประเทศ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ふいをつく",
				'zh-tw': "偷襲",
				th: "จู่โจมกะทันหัน",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
				th: "ทอยเหรียญ 1 ครั้ง ถ้าออกก้อย การโจมตีนี้ล้มเหลว",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533242,
				tcgplayer: 568952,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [664],
};

export default card;
