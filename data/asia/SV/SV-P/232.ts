import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ナンジャモのカイデン",
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "翼の 骨は 風を 受けると 電気を 作る。 海に 飛び込み 獲物を 感電させて 捕らえる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんこうせっか" },
			damage: "10+",
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807434,
				tcgplayer: 615009,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [940],
};

export default card;
