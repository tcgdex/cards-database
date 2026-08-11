import { Card } from "models/database/card";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エンペルト",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		'ja-jp': "クチバシから 伸びている ３本の ツノは 強さの 象徴。 リーダーが 一番 大きい。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "トータルコマンド" },
			damage: "20×",
			cost: ["Metal", "Colorless"],
			effect: {
				'ja-jp': "おたがいのベンチポケモンの数x20ダメージ。",
			},
		},
		{
			name: { ja: "うずしお" },
			damage: 90,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559784,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ポッタイシ",
	},

	retreat: 2,
	rarity: "None",
	dexId: [395],
};

export default card;
