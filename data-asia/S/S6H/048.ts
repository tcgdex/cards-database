import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ココドラ",
		'zh-tw': "可可多拉",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "体を 覆う 鋼の よろいは 進化するとき ポロリと はがれ落ち 新しい よろいが 作られる。",
		'zh-tw': "覆蓋全身的鋼鐵盔甲會在進化時全部脫落，然後長出新的盔甲。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かじる",
				'zh-tw': "咬",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ころがりタックル",
				'zh-tw': "滾動衝撞",
			},
			damage: 50,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560464,
				tcgplayer: 569180,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [304],
};

export default card;
