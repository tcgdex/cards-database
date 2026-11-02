import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーミラー",
		'zh-tw': "銅鏡怪",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "不可思議な エネルギーで 漂う。 背に 刻まれし 文様は 神聖とされ 古き 墓地などに まま 描かれる。",
		'zh-tw': "靠著不可思議的能量飄浮在半空。人們將其背上所刻的紋路視為神聖， 相同紋路有時會被刻在古時的墳墓等地。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "メタルプレス",
				'zh-tw': "金屬壓制",
			},
			damage: 20,
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651107,
				tcgplayer: 569891,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [436],
};

export default card;
