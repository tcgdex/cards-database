import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "マメパト",
		'zh-tw': "豆豆鴿",
		th: "มาเมพาโตะ",
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "人の住む 場所に 現れる。 エサを まくと 何百匹でも 集まってくるので 注意だぞ。",
		'zh-tw': "會出現在人類生活的地方。一旦撒出飼料就會有好幾百隻 豆豆鴿聚集而來，千萬要小心。",
		th: "ปรากฏตัวในสถานที่ที่คนอาศัย เมื่อโปรยอาหารจะมารวมกันเป็นหลายร้อยตัว ต้องระวังให้ดี",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "きんきゅうしんか",
				'zh-tw': "緊急進化",
				th: "วิวัฒนาการฉุกเฉิน",
			},
			effect: {
				ja: "このポケモンの残りHPが「30」以下なら、自分の番に1回使える。自分の山札から「ケンホロウ（『ポケモンex』をふくむ）」を1枚選び、この「マメパト」にのせて進化させる。そして山札を切る。",
				'zh-tw': "若這隻寶可夢的剩餘HP為「30」以下，則在自己的回合時可使用1次。從自己的牌庫選擇1張「高傲雉雞（包含『寶可夢【ex】』）」，放置於這隻「豆豆鴿」身上完成進化。並且重洗牌庫。",
				th: "ถ้าโปเกมอนนี้มี HP เหลือน้อยกว่าหรือเท่ากับ [30] ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [เคนโฮโล (รวม [โปเกมอน【ex】])] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบน [มาเมพาโตะ] นี้เพื่อวิวัฒนาการ แล้วสับสำรับการ์ด",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "かぜおこし",
				'zh-tw': "起風",
				th: "เรียกลม",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752941,
				tcgplayer: 566208,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [519],
};

export default card;
