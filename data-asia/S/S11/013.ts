import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ロコン",
		'zh-tw': "六尾",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "子どもだが ６本の しっぽが 美しい。 成長すると さらに しっぽが 増える。",
		'zh-tw': "雖然還是孩子，但已擁有美麗的６根尾巴。 長大後尾巴會變得更多。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "とびつく",
				'zh-tw': "飛撲",
			},
			damage: "10+",
			cost: ["Fire"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667616,
				tcgplayer: 569944,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [37],
};

export default card;
