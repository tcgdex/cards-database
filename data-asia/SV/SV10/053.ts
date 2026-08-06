import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "アサナン",
		'zh-tw': "瑪沙那",
		'zh-cn': "瑪沙那",
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "毎日 ヨガの 修行を 欠かさない。 瞑想を することで 精神力を 高めている。",
		'zh-tw': "每天都少不了瑜珈的修行。 會藉著冥想提高 自身的精神力。",
		'zh-cn': "每天都少不了瑜珈的修行。 會藉著冥想提高 自身的精神力。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ワンツーパンチ",
				'zh-tw': "連續擊拳",
				'zh-cn': "連續擊拳",
			},
			damage: "10+",
			cost: ["Fighting"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
				'zh-cn': "擲1次硬幣若為正面，則增加20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821885,
				tcgplayer: 628694,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [307],
};

export default card;
