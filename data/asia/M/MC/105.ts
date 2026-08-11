import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴウカザル",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'ja-jp': "頭で 燃える 炎の ように 激しい 性格の ポケモン。 素早さでは だれにも 負けない。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かえんぶとう" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分の手札から「基本[R]エネルギー」と「基本[F]エネルギー」をそれぞれ1枚まで選び、自分のポケモンに好きなようにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "バーンアウト" },
			damage: 200,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863401,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "モウカザル",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [392],
};

export default card;
