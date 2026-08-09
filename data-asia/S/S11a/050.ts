import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "キリキザン",
		'zh-tw': "劈斬司令",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "大勢の コマタナを 従える。 手下たちが 裏切らない よう 常に 目を 光らせている。",
		'zh-tw': "率領著一大群駒刀小兵。為了防止手下們背叛自己，總是睜大著眼睛監視牠們。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "スパイクドロー",
				'zh-tw': "扣殺抽出",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を2枚引く。",
				'zh-tw': "從自己的牌庫抽出2張卡。",
			},
		},
		{
			name: {
				ja: "パワーエッジ",
				'zh-tw': "力量刀鋒",
			},
			damage: 70,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673048,
				tcgplayer: 570813,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570897,
			},
		},
	],

	evolveFrom: {
		ja: "コマタナ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [625],
};

export default card;
