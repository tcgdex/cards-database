import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤミカラス",
		'zh-tw': "黑暗鴉",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "ボスのために キラキラ 光るものを 探している。 不吉な 存在と いわれ 忌み嫌う 人も 多い。",
		'zh-tw': "會為了老大尋找閃閃發亮的東西。被人們視為不吉利的象徵， 厭惡牠的人也很多。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "むれる",
				'zh-tw': "群聚",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「ヤミカラス」を2枚まで選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張「黑暗鴉」卡，放置於備戰區。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "つつく",
				'zh-tw': "啄",
			},
			damage: 10,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656358,
				tcgplayer: 570707,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577120,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [198],
};

export default card;
