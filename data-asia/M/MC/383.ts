import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ドクロッグ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "のど元に 毒袋を 持つ。 のどを 鳴らすと 溜まった 毒は 練りこまれ 強力になる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どつく" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "クリーンヒット" },
			damage: "90+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863685,
			},
		},
	],

	evolveFrom: {
		ja: "グレッグル",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [454],
};

export default card;
