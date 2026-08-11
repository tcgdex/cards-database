import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドラピオン",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'ja-jp': "自慢の パワーで 相手を ばらばらに できるのに さらに 猛毒で とどめを 刺すのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "クロスポイズン" },
			damage: "50×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを4回投げ、オモテの数×50ダメージ。オモテが2回以上なら、相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "スライスブレード" },
			damage: 120,
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557018,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "スコルピ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [452],
};

export default card;
