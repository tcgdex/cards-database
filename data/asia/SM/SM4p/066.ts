import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラディグダ",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 50,
	types: ["Metal"],

	description: {
		ja: "頭から 生えているのは 髭が 変化 したもので 金属質。 ゆらゆら 動き 仲間と 交信。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あなさぐり" },
			cost: [],
			effect: {
				ja: "自分の山札を上から3枚見て、好きな順番に入れ替えて、山札の上にもどす。",
			},
		},
		{
			name: { ja: "どろかけ" },
			damage: 10,
			cost: ["Metal"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560099,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [50],
};

export default card;
