import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ケンホロウ",
		'zh-tw': "高傲雉雞",
		th: "เคนโฮโล",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "高い 飛行能力を もち メスは 持久力に 優れる。 飛行スピードは オスが 勝る。",
		'zh-tw': "擁有高度的飛行能力。雌性擅於持久， 雄性擅長速度。",
		th: "มีความสามารถในการบินสูง ตัวเมียจะมีความอึดเป็นเลิศ ในขณะที่ตัวผู้จะเหนือกว่าด้านความเร็วในการบิน",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "リバースウインド",
				'zh-tw': "反轉之風",
				th: "รีเวิร์สวินด์",
			},
			damage: 70,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、相手のバトルポケモンについているエネルギーを2個選び、相手の手札にもどす。",
				'zh-tw': "若希望，選擇2個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。",
				th: "หากต้องการ เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 2 ลูก นำกลับขึ้นมือฝ่ายตรงข้าม",
			},
		},
		{
			name: {
				ja: "そこぢから",
				'zh-tw': "潛力",
				th: "พลังแฝง",
			},
			damage: 180,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
				th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752943,
				tcgplayer: 566210,
			},
		},
	],

	evolveFrom: {
		ja: "ハトーボー",
	},

	retreat: 0,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [521],
};

export default card;
