import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザ",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "はるか 上空の オゾン層の 中を 飛んでいるため 最近まで 姿を 見た 者は いなかった。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くらいつく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "パワーブラスト" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 462914,
				tcgplayer: 597230,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [384],
};

export default card;
