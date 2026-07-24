import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "コスモッグ",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "大昔は 星の子 という 名で 呼ばれた。 別世界の ポケモンと いわれているが 詳しくは 不明。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちりあつめ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561627,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [789],
};

export default card;
