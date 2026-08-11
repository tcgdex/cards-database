import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シャワーズ",
		'zh-tw': "水伊布",
		'th-th': "ชาวเวอร์ส",
		'id-id': "Vaporeon",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'ja-jp': "水辺に 棲むが 尻尾には 魚のような ひれが 残っていて 人魚と 間違う 人もいる。",
		'zh-tw': "雖然棲息在水邊，但由於尾巴上有像是魚的鰭， 因此有的人會把牠誤認成人魚。",
		'th-th': "อาศัยอยู่ริมน้ำ เพราะหางมีครีบเหมือนปลาอยู่เลยมีคนเข้าใจผิดคิดว่าเป็นเงือก",
		'id-id': "Vaporeon hidup di dekat air. Karena terdapat sirip seperti ikan pada ekornya, ada manusia yang menyangka Pokémon ini adalah putri duyung.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "スパイラルドレイン",
				'zh-tw': "螺旋吸取",
				'th-th': "สไปรัลเดรน",
				'id-id': "Spiral Drain",
			},
			damage: 30,
			cost: ["Water"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
				'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
				'id-id': "Pulihkan HP Pokémon ini sejumlah 30.",
			},
		},
		{
			name: {
				'ja-jp': "とうしのうずしお",
				'zh-tw': "鬥志潮旋",
				'th-th': "น้ำวนนักสู้",
				'id-id': "Pusaran Air Semangat Petarung",
			},
			damage: "90+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが「ポケモンex・V」なら、90ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加90點傷害。",
				'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】 /【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 90",
				'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon {ex}/{V}, kerusakan yang diberikan bertambah sejumlah 90.",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719587,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837492,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837493,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イーブイ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [134],
};

export default card;
