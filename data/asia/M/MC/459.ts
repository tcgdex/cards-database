import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マリィのレパルダス",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'ja-jp': "フォクスライと 縄張りを めぐり 争う。 音ひとつ たてずに 獲物の 背後に 忍び寄る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "シャープクロー" },
			damage: "70+",
			cost: ["Darkness", "Darkness"],
			effect: {
				'ja-jp': "相手のバトルポケモンが「ポケモンex」なら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863761,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マリィのチョロネコ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [510],
};

export default card;
