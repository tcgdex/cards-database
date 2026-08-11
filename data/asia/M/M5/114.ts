import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "メガダークライex",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ナイトレイド" },
			damage: "110+",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "自分のベンチポケモンにダメカンがのっているなら、110ダメージ追加。",
			},
		},
		{
			name: { ja: "アビスアイ" },
			cost: ["Darkness", "Darkness", "Darkness"],
			effect: {
				ja: "相手のバトルポケモンが特殊状態なら、そのポケモンをきぜつさせる。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888659,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Special illustration rare",
	dexId: [491],

	suffix: "EX",
};

export default card;
