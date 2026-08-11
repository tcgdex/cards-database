import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "カイリキーVMAX",
		'zh-tw': "怪力VMAX",
		th: "ไคริกีVMAX",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "リベンジバスター",
				'zh-tw': "復仇光炮",
				th: "รีเวนจ์บัสเตอร์",
			},
			damage: "80+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンにダメカンがのっているなら、140ダメージ追加。",
				'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加140點傷害。",
				th: "ถ้าโปเกมอนบนเบนช์ฝ่ายเรามีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 140",
			},
		},
		{
			name: {
				ja: "キョダイシンゲキ",
				'zh-tw': "超極巨會心一擊",
				th: "กิกะบุกจู่โจม",
			},
			damage: 240,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「キョダイシンゲキ」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「超極巨會心一擊」。",
				th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [กิกะบุกจู่โจม] ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687634,
				tcgplayer: 571610,
			},
		},
	],

	evolveFrom: {
		ja: "カイリキーV",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [68],
};

export default card;
