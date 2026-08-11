import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ナマコブシ",
		'zh-tw': "拳海參",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "保湿効果に 優れた 粘液が 皮膚を 被っているので 何日も 陸地に いても 干からびない。",
		'zh-tw': "覆蓋著皮膚的黏液具有出眾的保濕效果，即使在陸地上待好幾天也不會乾掉。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ナマコブシなげ",
				'zh-tw': "拳海參上投",
			},
			effect: {
				ja: "このカードが手札にあるなら、自分の番に1回使える。このカードを山札の下にもどす。その後、自分の山札を1枚引く。この番、すでに別の「ナマコブシなげ」を使っていたなら、この特性は使えない。",
				'zh-tw': "若手牌有這張卡，則在自己的回合時可使用1次。將這張卡放回牌庫下方。然後，從自己的牌庫抽出1張卡。在這個回合，若已經使出了其他的「拳海參上投」，則這個特性無法使用。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "げんこつ",
				'zh-tw': "拳骨",
			},
			damage: 50,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575582,
				tcgplayer: 569528,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [771],
};

export default card;
