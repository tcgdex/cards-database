import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ビビヨン",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "不思議な 土地で 生まれた。 色鮮やかな 毒の りんぷんを 翅から 散らして 戦う。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "エボルパウダー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチポケモン全員からそれぞれ進化するカードを、自分の山札から1枚ずつ選び、それぞれにのせて進化させる。そして山札を切る。",
			},
		},
		{
			name: { ja: "カッターウインド" },
			damage: 90,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793571,
				tcgplayer: 587687,
			},
		},
	],

	evolveFrom: {
		ja: "コフーライ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [666],
};

export default card;
