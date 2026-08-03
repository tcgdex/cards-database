import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "テッポウオ",
		'zh-tw': "鐵炮魚",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "吸盤の ように 変化した 背びれで マンタインに くっつき 食べ残しを わけてもらっている。",
		'zh-tw': "會用變成吸盤狀的背鰭吸附在巨翅飛魚身上， 吃牠平常吃剩下的東西。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みずでっぽう",
				'zh-tw': "水槍",
			},
			damage: 10,
			cost: ["Water"],
		},
		{
			name: {
				ja: "するどいひれ",
				'zh-tw': "銳利鰭",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586545,
				tcgplayer: 571283,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578370,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [223],
};

export default card;
