import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ノココッチex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぎゃっきょうテール" },
			damage: "60×",
			cost: ["Colorless"],
			effect: {
				ja: "相手の場の「ポケモンex」の数×60ダメージ。",
			},
		},
		{
			name: { ja: "ドリルブレイク" },
			damage: 150,
			cost: ["Colorless", "Colorless", "Colorless"],
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
				cardmarket: 863877,
			},
		},
	],

	evolveFrom: {
		ja: "ノコッチ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [982],

	suffix: "EX",
};

export default card;
