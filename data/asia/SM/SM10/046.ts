import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラガラ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "ホネを 投げつけ バルジーナを 撃ち落す。 親の かたきを 討っていると 考えられている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ボーンラッシュ" },
			damage: "50×",
			cost: ["Fighting"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数x50ダメージ。",
			},
		},
		{
			name: { ja: "アサルトブーム" },
			damage: "70+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンに「ポケモンのどうぐ」がついているなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557401,
			},
		},
	],

	evolveFrom: {
		ja: "カラカラ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [105],
};

export default card;
