import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "救助隊DXのピカチュウ",
	},

	illustrator: "Spike Chunsoft.",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "ある日 目が 覚めたら ピカチュウに なっちゃった！ 困った ポケモンを 助けるため 救助隊を 結成したぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ともだちきゅうじょ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュからポケモンを1枚選び、相手に見せて、手札に加える。",
			},
		},
		{
			name: { ja: "エレキボール" },
			damage: 50,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463094,
				tcgplayer: 597256,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [25],
};

export default card;
