import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ バスラオ",
		'zh-tw': "洗翠 野蠻鱸魚",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "温厚な 気質など 相違点 あれども バスラオの 特徴を 多く 有すゆえ そのリージョンフォームと 定義す。",
		'zh-tw': "此寶可夢具有多項野蠻鱸魚的特徵，雖然有性情溫馴等不同點存在， 吾人仍將其定義為野蠻鱸魚的地區形態。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ふいをつく",
				'zh-tw': "偷襲",
			},
			damage: 40,
			cost: [],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656246,
				tcgplayer: 570675,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577099,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [550],
};

export default card;
