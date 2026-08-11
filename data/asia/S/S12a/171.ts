import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ダブルターボエネルギー",
		'zh-tw': "雙重渦輪能量",
		th: "ดับเบิลเทอร์โบเอนเนอร์จี้",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[C]エネルギー2個ぶんとしてはたらく。このカードをつけているポケモンが使うワザの、相手のポケモンへのダメージは「-20」される。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供2個【無】能量。 附有這張卡的寶可夢使用的招式，對對手的寶可夢造成的傷害「-20」點。",
		th: "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงาน[ไร้สี] 2 ลูก แดเมจจากท่าต่อสู้ของโปเกมอนที่ติดการ์ดนี้อยู่ใช้ทำกับโปเกมอนฝ่ายตรงข้าม จะถูก [-20]",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687733,
				tcgplayer: 571709,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577524,
			},
		},
	],

	regulationMark: "F",
	rarity: "None",
};

export default card;
