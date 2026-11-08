import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "テッカグヤGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ロケットフォール" },
			damage: "30+",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンのにげるためのエネルギーの数x30ダメージ追加。",
			},
		},
		{
			name: { ja: "ムーンプレス" },
			damage: 130,
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ブラスターGX" },
			damage: 180,
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のサイドをすべてオモテにする。（対戦が終わるまで、そのサイドはオモテのまま。）［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560104,
			},
		},
	],

	retreat: 4,
	rarity: "Double rare",
	dexId: [797],

	suffix: "GX",
};

export default card;
