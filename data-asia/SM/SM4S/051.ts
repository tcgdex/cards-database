import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラゴローニャGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Lightning"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 80,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ちょうでんじタックル" },
			damage: 200,
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも50ダメージ。",
			},
		},
		{
			name: { ja: "ヘビーロックGX" },
			damage: 100,
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、相手は手札からカードを出して使えない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560363,
			},
		},
	],

	evolveFrom: {
		ja: "アローラゴローン",
	},

	retreat: 4,
	rarity: "Ultra Rare",
	dexId: [76],

	suffix: "GX",
};

export default card;
