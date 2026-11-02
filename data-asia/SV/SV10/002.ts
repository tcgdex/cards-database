import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "キノココ",
		'zh-tw': "蘑蘑菇",
		'zh-cn': "蘑蘑菇",
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "湿った 場所を 好み 昼間は 森の 木陰で じっと している。 頭から 毒の 粉を 出す。",
		'zh-tw': "喜歡潮濕的地方，白天會 動也不動地待在森林的樹蔭下。 會從頭上放出毒粉。",
		'zh-cn': "喜歡潮濕的地方，白天會 動也不動地待在森林的樹蔭下。 會從頭上放出毒粉。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ころがりタックル",
				'zh-tw': "滾動衝撞",
				'zh-cn': "滾動衝撞",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821833,
				tcgplayer: 628643,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [285],
};

export default card;
