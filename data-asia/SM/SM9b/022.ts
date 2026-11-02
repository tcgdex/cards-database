import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "サンドパン",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "よく ツメや ツノが 折れてしまう。 折れた ツメや ツノで 土を 耕す 道具が 作られる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "れんぞくひっかき" },
			damage: "30×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを4回投げ、オモテの数x30ダメージ。",
			},
		},
		{
			name: { ja: "すなじごく" },
			damage: 90,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558140,
			},
		},
	],

	evolveFrom: {
		ja: "サンド",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [28],
};

export default card;
