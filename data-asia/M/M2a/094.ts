import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガルチャブルex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふんばりボディ" },
			effect: {
				ja: "このポケモンが、ワザのダメージを受けてきぜつするとき、自分はコインを1回投げる。オモテなら、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サマーソルトダイブ" },
			damage: "120+",
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "場にスタジアムが出ているなら、140ダメージ追加。その後、そのスタジアムをトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861337,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [701],

	suffix: "EX",
};

export default card;
