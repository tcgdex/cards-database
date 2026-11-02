import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "トルネロス",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "雲のような エネルギー体に 下半身が 包まれている。 時速３００キロで 空を 飛ぶ。",
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
			name: { ja: "スクリューダイブ" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札が6枚になるように、山札を引く。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899980,
				tcgplayer: 709212,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [641],
};

export default card;
