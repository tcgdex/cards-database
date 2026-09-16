import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ビビヨン",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "特別な 土地で 生まれた。 色鮮やかな 毒の りんぷんを 翅から 散らして 戦う。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "みちびきのまい" },
			effect: {
				ja: "自分の番に1回使える。コインを1回投げオモテなら、自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "どくのこな" },
			damage: 60,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908183,
			},
		},
	],

	evolveFrom: {
		ja: "コフーライ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [666],
};

export default card;
