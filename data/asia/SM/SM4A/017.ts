import { Card } from "models/database/card";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ムウマ",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "あの手 この手で 人を 驚かし 生命エネルギーを 吸い取る。 驚かす 練習は 欠かさない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あやしいひかり" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560262,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [200],
};

export default card;
