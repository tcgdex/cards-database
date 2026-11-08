import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルギアVSTAR",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: { ja: "アッセンブルスター" },
			effect: {
				'ja-jp': "自分の番に使える。自分のトラッシュから[C]ポケモン（「ルールを持つポケモン」をのぞく）を2枚まで選び、ベンチに出す。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ストームダイブ" },
			damage: 220,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "のぞむなら、場に出ているスタジアムをトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 675886,
				tcgplayer: 597498,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ルギアV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [249],
};

export default card;
