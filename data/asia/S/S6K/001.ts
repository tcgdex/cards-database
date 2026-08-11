import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "レディバ",
		'zh-tw': "芭瓢蟲",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "とっても 臆病な ポケモン。 仲間と 一緒に リフレクターを 張って 巣を 守って いるのだ。",
		'zh-tw': "非常膽小的寶可夢。會和夥伴一起張開反射壁，藉此保護巢穴。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "もってくる",
				'zh-tw': "呼喚",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
				'zh-tw': "從自己的牌庫抽出1張卡。",
			},
		},
		{
			name: {
				ja: "パンチ",
				'zh-tw': "出拳",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560526,
				tcgplayer: 569229,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [165],
};

export default card;
