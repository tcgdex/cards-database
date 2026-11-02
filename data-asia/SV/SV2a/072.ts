import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メノクラゲ",
		'zh-tw': "瑪瑙水母",
		th: "เมโนคุราเกะ",
		id: "Tentacool",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "ほとんどが 水分で できている。 体は 海の中では 水と 同化して とても 見えづらいのだ。",
		'zh-tw': "絕大部分都是由水組成的身體在海中會與海水同化， 令其他生物很難看見牠。",
		th: "ร่างกายส่วนใหญ่เกิดมาจากน้ำ เมื่ออยู่ในทะเลร่างกายจะดูกลมกลืนกับน้ำจนมองแยกไม่ออก",
		id: "Tubuh Tentacool hampir seluruhnya terbentuk atas air. Di dalam laut, tubuhnya terlihat menyatu dengan air sehingga sulit dilihat.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぴりっ",
				'zh-tw': "麻",
				th: "เผ็ด",
				id: "Pedas Menyengat",
			},
			damage: 10,
			cost: ["Water"],
		},
		{
			name: {
				ja: "みずまき",
				'zh-tw': "灑水",
				th: "โปรยน้ำ",
				id: "Menyiramkan Air",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719514,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837370,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837372,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [72],
};

export default card;
