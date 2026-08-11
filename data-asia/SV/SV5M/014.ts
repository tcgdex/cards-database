import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "シガロコ",
		'zh-tw': "蟲滾泥",
		th: "ชิกาโรโค",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "泥玉を 転がしながら 進化の エネルギーを 熟成させる。 やがて 進化のときを 迎える。",
		'zh-tw': "會一邊滾著泥巴球，一邊使進化的能量成熟。 最終會迎接進化的時刻。",
		th: "บ่มพลังงานที่ใช้ในการวิวัฒนาการให้สุกไปในขณะที่กลิ้งก้อนโคลน เพื่อรอช่วงเวลาที่จะได้วิวัฒนาการ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ちょっとつっこむ",
				'zh-tw': "撞一下",
				th: "จุ้นจ้านหน่อย",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
				th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752895,
				tcgplayer: 566165,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [953],
};

export default card;
