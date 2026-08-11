import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ミニーブ",
		'zh-tw': "迷你芙",
		'zh-cn': "迷你芙",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "頭の 実から オイルを 出して 敵から 身を 守る。 オイルは とびあがるほど 苦くて 渋い。",
		'zh-tw': "會從頭上的果實噴出油 來保護自己不受敵人攻擊。 油的味道苦澀到會讓人跳起來。",
		'zh-cn': "會從頭上的果實噴出油 來保護自己不受敵人攻擊。 油的味道苦澀到會讓人跳起來。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
				'zh-cn': "衝撞",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821841,
				tcgplayer: 628651,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [928],
};

export default card;
