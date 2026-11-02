import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "カメテテ",
		'zh-tw': "龜腳腳",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "２匹が 海辺の 手ごろな 岩に くっついて 暮らす。 満潮時 協力して エサを 集める。",
		'zh-tw': "２隻龜腳腳會在海邊找一塊大小合適的岩石，附在上面一起生活。 漲潮的時候會互相合作尋找食物。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "どろかけ",
				'zh-tw': "擲泥",
			},
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "きりさく",
				'zh-tw': "劈開",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667935,
				tcgplayer: 569991,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [688],
};

export default card;
