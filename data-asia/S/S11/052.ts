import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラメシヤ",
		'zh-tw': "多龍梅西亞",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "古代の 海で 暮らしていた。 ゴーストポケモンとして よみがえり かつての すみかを さまよっている。",
		'zh-tw': "曾經棲息在古代的大海。在重生為幽靈寶可夢後， 會在昔日的住處徘徊。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "とつげき",
				'zh-tw': "突擊",
			},
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667927,
				tcgplayer: 569983,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [885],
};

export default card;
