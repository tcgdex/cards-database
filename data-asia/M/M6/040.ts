import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ランドロス",
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "ランドロスが 訪れる 土地は 作物が たくさん 実るため 畑の神様 と 言われている。",
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
			name: { ja: "ガイアクラッシュ" },
			damage: 110,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "場に出ているスタジアムをトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899943,
				tcgplayer: 709193,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [645],
};

export default card;
