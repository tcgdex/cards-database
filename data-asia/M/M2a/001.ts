import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒビキのカイロス",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "ツノで 獲物を 挟みこみ そのまま まっぷたつに するか 強引に 投げ飛ばしてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はさむ" },
			damage: 20,
			cost: ["Grass"],
		},
		{
			name: { ja: "いっぽんがえし" },
			damage: "70+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分の「ヒビキのポケモン」がきぜつしていたなら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861245,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861526,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 861527,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [127],
};

export default card;
