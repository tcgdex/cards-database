import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "カチコール",
		'zh-tw': "冰寶",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "万年雪に 覆われた 山岳に 生息す。 大気内の水分を 冷やして 作りし 氷の兜を 被りて 身を護る。",
		'zh-tw': "棲息在萬年積雪覆蓋的山區。 戴著將大氣中的水分冷凍後 形成的冰盔，藉此保護自己。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つらら",
				'zh-tw': "冰柱",
			},
			damage: 40,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651083,
				tcgplayer: 569867,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [712],
};

export default card;
