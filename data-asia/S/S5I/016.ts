import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキブル",
		'zh-tw': "電擊魔獸",
		th: "เอเลคิเบิล",
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "エレキブル １匹で 大都市の 建物 すべての 電力を １年分 まかなうことが できる。",
		'zh-tw': "只要１隻電擊魔獸就能提供整座大都市所有建築物一整年所需的電力。",
		th: "เอเลคิเบิล 1 ตัวสามารถจ่ายไฟฟ้าสำหรับทุกตึกในเมืองใหญ่ได้พอถึง 1 ปีทีเดียว",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ローリングアタック",
				'zh-tw': "回轉攻擊",
				th: "โรลลิ่งแอทแทค",
			},
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
				th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 30",
			},
		},
		{
			name: {
				ja: "いなずまなげ",
				'zh-tw': "閃電上投",
				th: "ขว้างฟ้าแลบ",
			},
			damage: 180,
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「いなずまなげ」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「閃電上投」。",
				th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [ขว้างฟ้าแลบ] ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533302,
				tcgplayer: 568964,
			},
		},
	],

	evolveFrom: {
		ja: "エレブー",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [466],
};

export default card;
