import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキカブリ",
		'zh-tw': "雪笠怪",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "雪中にて 遭遇する 可能性 高し。 人里に 現れるも 害は なさず 童の 良き友となると 伝わる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "どつく",
				'zh-tw': "推擊",
			},
			damage: 10,
			cost: ["Water"],
		},
		{
			name: {
				ja: "つららミサイル",
				'zh-tw': "冰柱飛彈",
			},
			damage: 60,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656233,
				tcgplayer: 570672,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577096,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [459],
};

export default card;
