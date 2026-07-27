import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "クワガノンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Lightning"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "チャージビーム" },
			damage: 50,
			cost: ["Lightning"],
			effect: {
				ja: "自分のトラッシュにあるエネルギーを1枚、このポケモンにつける。",
			},
		},
		{
			name: { ja: "ちょうでんじほう" },
			damage: 180,
			cost: ["Lightning", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
		{
			name: { ja: "ギガトロンGX" },
			cost: ["Lightning", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン全員に、それぞれ60ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561549,
			},
		},
	],

	evolveFrom: {
		ja: "デンヂムシ",
	},

	retreat: 1,
	rarity: "Double rare",
	dexId: [738],

	suffix: "GX",
};

export default card;
