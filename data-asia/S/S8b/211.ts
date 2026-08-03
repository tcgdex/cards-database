import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ポワルン",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "天気に よって 姿が 変わる。 気象が 荒くなるほど 気性も 荒っぽく なってくる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "てんきよみ" },
			effect: {
				ja: "自分のトラッシュに「スタジアム」が8枚以上あるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ウェザーフォース" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の手札が6枚になるように、山札を引く。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587009,
				tcgplayer: 571463,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [351],
};

export default card;
