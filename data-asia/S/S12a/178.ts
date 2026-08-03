import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "マナフィ",
		'zh-tw': "瑪納霏",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "どんな ポケモンとでも 心を 通い合わせる ことが できる 不思議な 能力を 持っている。",
		'zh-tw': "有著能與任何寶可夢心意相通的神奇能力。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "なみのヴェール",
				'zh-tw': "浪之幕",
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のワザのダメージを受けない。",
				'zh-tw': "只要這隻寶可夢在場上，自己的所有備戰寶可夢不會受到對手的招式的傷害。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "みずかけ",
				'zh-tw': "潑水",
			},
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687740,
				tcgplayer: 571716,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Illustration rare",
	dexId: [490],
};

export default card;
