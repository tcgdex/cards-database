import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ルギアVSTAR",
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
				ja: "自分の番に使える。自分のトラッシュから[C]ポケモン（「ルールを持つポケモン」をのぞく）を2枚まで選び、ベンチに出す。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ストームダイブ" },
			damage: 220,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、場に出ているスタジアムをトラッシュする。",
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
		ja: "ルギアV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [249],
};

export default card;
