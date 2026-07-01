import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "パンプジンex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ホラーロンド",
			},
			damage: "30+",
			cost: ["Psychic"],
			effect: {
				ja: "ダメカンがのっている自分のベンチポケモンの数×50ダメージ追加。",
			},
		},
		{
			name: {
				ja: "ゴーストタッチ",
			},
			damage: 140,
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	variants: [{ type: "holo" }],
	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [711],
	suffix: "EX",

	thirdParty: {
		cardmarket: 877338
	}
};

export default card;
