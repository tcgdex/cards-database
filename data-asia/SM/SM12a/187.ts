import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイGX",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かくせいDNA" },
			effect: {
				ja: "このポケモンは、自分の番に、「イーブイ」から進化するカードを手札から出して、このポケモンに重ねて進化できる（最初の自分の番と、このポケモンを場に出した番はのぞく）。進化する前に、このポケモンのHPを、すべて回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ブーストダッシュ" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ハッピーメーカーGX" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにある好きなカードを3枚、相手に見せてから、手札に加える。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544681,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [133],

	suffix: "GX",
};

export default card;
