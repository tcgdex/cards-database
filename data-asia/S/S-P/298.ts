import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ラブトロス",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "海を越えて 飛来したらば 厳しき冬の 終わりを知る。 慈愛が ヒスイの地に 新しき命 芽吹かせるとの 伝承あり。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ドレインキッス" },
			damage: 20,
			cost: ["Psychic"],
			effect: {
				ja: "このポケモンのHPを「20」回復する。",
			},
		},
		{
			name: { ja: "ラブシンパシー" },
			damage: "70+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "自分の手札と相手の手札が同じ枚数なら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 666787,
				tcgplayer: 597471,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [905],
};

export default card;
