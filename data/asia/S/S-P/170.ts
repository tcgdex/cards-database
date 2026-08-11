import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴリランダーV",
		'zh-tw': "月月熊V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ドレインパンチ",
				'zh-tw': "泥炭肩膀",
			},
			damage: 60,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
				'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			},
		},
		{
			name: { ja: "ドラムラッシュ" },
			damage: 160,
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 534112,
				tcgplayer: 597368,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [812],
};

export default card;
