import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ミニリュウ",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "とある 釣り師が １０時間の ファイトの 末に 釣り上げて 存在が 確認 された。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しんかのきざし" },
			cost: ["Grass"],
			effect: {
				ja: "自分の山札にある「ミニリュウ」「ハクリュー」「カイリュー」を1枚ずつ、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "しっぽでたたく" },
			damage: 10,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561643,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [147],
};

export default card;
