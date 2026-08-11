import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マケンカニ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'ja-jp': "硬い ハサミは 攻めも 守りも 得意。 マケンカニ 同士の 戦いは ボクシングの ようだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どつく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ナックルボンバー" },
			damage: "30+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のサイドの残り枚数が、相手より多いなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557411,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [739],
};

export default card;
