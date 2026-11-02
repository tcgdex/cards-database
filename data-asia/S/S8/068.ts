import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "アイアント",
		'zh-tw': "鐵蟻",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "大きな顎は 岩石をも かみ砕く。 サダイジャから タマゴを 守るため 群れで 戦う。",
		'zh-tw': "巨大的顎部能咬碎岩石。為了不讓沙螺蟒把蛋搶走，會和其他同類一起並肩戰鬥。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぎゃっきょうのアゴ",
				'zh-tw': "逆境顎",
			},
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが[炎]ポケモンなら、そのポケモンをマヒにする。",
				'zh-tw': "若對手的戰鬥寶可夢為【火】寶可夢，則將那隻寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575623,
				tcgplayer: 569569,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [632],
};

export default card;
