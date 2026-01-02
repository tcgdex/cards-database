import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "シビルドン",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		ja: "腕の 力で 海から はい出し 水辺の 獲物に 襲いかかる。 一瞬で 海へ 引きずり込む。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "かみなりのキバ" },
			damage: 60,
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "バリバリかいてん" },
			damage: "100x",
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			effect: { ja: "コインを4回投げ、オモテの数×100ダメージ。" },
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "シビビール",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [604],
};

export default card;
