import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ボルトロス",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "大空を 飛び回りながら あちこちに 雷を 落として 山火事を 起こすので 嫌われる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "けしんだんけつ" },
			effect: {
				ja: "自分の場に「トルネロス」「ボルトロス」「ランドロス」「ラブトロス」がいるなら、このポケモンはワザを使うための[C]エネルギーが、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サンダーエッジ" },
			damage: 90,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899926,
				tcgplayer: 709289,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [642],
};

export default card;
