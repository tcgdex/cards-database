import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ムウマ",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "あの手 この手で 人を 驚かし 生命エネルギーを 吸い取る。 驚かす 練習は 欠かさない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あやしいひかり" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
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
