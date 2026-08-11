import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "キバニア",
		'zh-tw': "纏紅鶴ex",
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "鋭い キバと たくましい 顎を もつ。 船乗りたちは キバニアの すみかには けっして 近づかない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "するどいキバ",
				'zh-tw': "恰好喙",
			},
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723905,
				tcgplayer: 587848,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [318],
};

export default card;
