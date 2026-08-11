import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "デデンネ",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "尻尾で 発電所や 民家の コンセントから 電気を 吸い取り ヒゲから 電撃を 撃ち出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "パチパチタッチ" },
			damage: 10,
			cost: ["Fairy"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。ウラなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558856,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [702],
};

export default card;
