import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "モクロー",
		'zh-tw': "木木梟",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "たおやかなる 翼 備え 無音にて 飛翔す。 小刀に比肩す 鋭利なる羽根 翼より 巧みに 飛ばす技 体得す。",
		'zh-tw': "靠一對柔韌的翅膀悄然無聲地飛行。 有著用翅膀將鋒利程度不遜於小刀 的羽毛巧妙地發射出去的本領。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "とびつく",
				'zh-tw': "飛撲",
			},
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651065,
				tcgplayer: 569849,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [722],
};

export default card;
