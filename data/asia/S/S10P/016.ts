import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "コダック",
		'zh-tw': "可達鴨",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "常より 頭痛に 悩む。 強まりしとき 秘めたる力 意に反し 暴発するゆえ 痛み 和らげる術を 模索中なり。",
		'zh-tw': "常年為頭痛所苦。疼痛增強之時， 蘊藏於體內之力將失控爆發。 故吾人正在摸索舒緩頭痛之法。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぼーっとする",
				'zh-tw': "發呆",
			},
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、このポケモンのHPを「10」回復する。",
				'zh-tw': "擲1次硬幣若為正面，則將這隻寶可夢恢復「10」HP。",
			},
		},
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651075,
				tcgplayer: 569859,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [54],
};

export default card;
