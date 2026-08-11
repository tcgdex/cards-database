import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タマタマ",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],

	description: {
		'ja-jp': "タマタマだけに 伝わる テレパシーを 出し合っているので どんなときでも ６匹 集まれる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "そうじゅくしんか" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このワザは、先攻プレイヤーの最初の番でも使える。このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863296,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [102],
};

export default card;
