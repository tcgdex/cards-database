import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "アゴジムシ",
		'zh-tw': "強顎雞母蟲",
		th: "อโกจิมูชิ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "大きな 顎は 太い 枝を へし折る 威力。 天敵の ココガラも たまらず 逃げだす。",
		'zh-tw': "強顎雞母蟲大大的顎部擁有能夠折斷粗壯樹枝的威力。 連天敵稚山雀都會因此逃跑。",
		th: "กรามใหญ่นั้นมีพละกำลังมหาศาลขนาดงอท่อนไม้ใหญ่จนหักได้ แม้ศัตรูคู่แค้นโคโคการะยังต้องหนี",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "むれる",
				'zh-tw': "群聚",
				th: "ชุมนุม",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「アゴジムシ」を2枚まで選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張「強顎雞母蟲」，放置於備戰區。並且重洗牌庫。",
				th: "เลือกการ์ด [อโกจิมูชิ] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			},
		},
		{
			name: {
				ja: "はさむ",
				'zh-tw': "夾住",
				th: "หนีบ",
			},
			damage: 10,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752891,
				tcgplayer: 566161,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [736],
};

export default card;
