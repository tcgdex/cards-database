import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
		'zh-tw': "代歐奇希斯",
		th: "ดีอ็อกซิส",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "宇宙ウイルスが 突然変異を 起こして ポケモンに なった。 オーロラの 近くに 現れる。",
		'zh-tw': "宇宙病毒發生突變後變成了寶可夢。 出現在極光的附近。",
		th: "ไวรัสอวกาศกลายพันธุ์อย่างฉับพลันแล้วกลายเป็นโปเกมอน จะปรากฏตัวอยู่ใกล้ ๆ ออโรร่า",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "フォトンブースト",
				'zh-tw': "光子提昇",
				th: "โฟตอนบูสต์",
			},
			damage: "80+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに「フュージョンエネルギー」がついているなら、80ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上附有「匯流能量」，則增加80點傷害。",
				th: "ถ้าโปเกมอนนี้มี [พลังงานจู่โจมแบบฟิวชัน] ติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 80",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687540,
				tcgplayer: 571598,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [386],
};

export default card;
