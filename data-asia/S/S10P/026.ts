import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲピー",
		'zh-tw': "波克比",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "卵に似た姿。 野山にて 遭遇し折 卵が動いたと 早とちりする者 多し。 邪気なき笑顔 人心を癒す 効能あり。",
		'zh-tw': "外觀好似一顆蛋，常讓在野外 遇見牠的人誤會蛋自己會動。 純真的笑容有療癒人心的功效。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "しあわせタッチ",
				'zh-tw': "幸福之觸",
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分のバトルポケモンのHPを「10」回復する。",
				'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。將自己的戰鬥寶可夢恢復「10」HP。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ころがる",
				'zh-tw': "滾動",
			},
			damage: 10,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651085,
				tcgplayer: 569869,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [175],
};

export default card;
