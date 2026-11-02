import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ラブトロス",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "海を越えて 飛来したらば 厳しき冬の 終わりを知る。 慈愛が ヒスイの地に 新しき命 芽吹かせるとの 伝承あり。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ハートサイン" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ラブレゾナンス" },
			damage: "80+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "自分の場に、相手の場のポケモンと同じタイプのポケモンがいるなら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863648,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [905],
};

export default card;
