import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ギャラドスGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Water"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たきのぼり" },
			damage: 70,
			cost: ["Water", "Colorless", "Colorless"],
		},
		{
			name: { ja: "りゅうのわざわい" },
			damage: "100+",
			cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "場にスタジアムが出ているなら、100ダメージ追加。その後、そのスタジアムをトラッシュする。",
			},
		},
		{
			name: { ja: "ドレッドストームGX" },
			cost: ["Water"],
			effect: {
				ja: "相手の場のポケモン全員についているエネルギーを、1個ずつトラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560253,
			},
		},
	],

	evolveFrom: {
		ja: "コイキング",
	},

	retreat: 4,
	rarity: "Double rare",
	dexId: [130],

	suffix: "GX",
};

export default card;
