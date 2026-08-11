import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのウッウ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "なんでも 丸飲みする 習性。 大きすぎる 獲物を 詰まらせて 困っている ウッウほど 手強い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きまぐれスピット" },
			damage: 120,
			cost: ["Colorless"],
			effect: {
				ja: "相手のサイドの残り枚数が4枚・3枚でないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861386,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861758,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 861759,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [845],
};

export default card;
