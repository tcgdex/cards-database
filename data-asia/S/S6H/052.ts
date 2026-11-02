import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴン",
		'zh-tw': "多邊獸",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "２０年前 宇宙を 夢見た 科学者たちに よって 作られた。 未だ その夢は 叶っていない。",
		'zh-tw': "在２０年前被夢想著能探索宇宙的科學家們創造出來。這個夢想至今仍未實現。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かくばる",
				'zh-tw': "稜角化",
			},
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560468,
				tcgplayer: 569184,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [137],
};

export default card;
