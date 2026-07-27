import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "コドラ",
		'zh-tw': "可多拉",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "鋼の よろいを 岩に ぶつけた ときに 出る 火花の 大きさで 強さを アピールする 習性。",
		'zh-tw': "有著用鋼甲撞擊岩石時產生的火花大小來顯示自己有多強大的習性。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
			},
			damage: 50,
			cost: ["Metal", "Colorless", "Colorless"],
		},
		{
			name: {
				ja: "メタルクロー",
				'zh-tw': "金屬爪",
			},
			damage: 90,
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560465,
				tcgplayer: 569181,
			},
		},
	],

	evolveFrom: {
		ja: "ココドラ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [305],
};

export default card;
