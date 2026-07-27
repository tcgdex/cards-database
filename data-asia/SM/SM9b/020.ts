import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "スリーパー",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "アローラに 暮らす スリーパーの ターゲットは 主に ネッコアラ。 人は あまり 被害に あわない。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "さそうふりこ" },
			effect: {
				ja: "このポケモンがいるかぎり、相手のバトルポケモンがきぜつしたとき、自分はコインを1回投げる。オモテなら、次にバトル場に出す相手のベンチポケモンは、このポケモンの持ち主が選ぶ。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "のうをゆさぶる" },
			damage: "30+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手の手札の枚数x10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558138,
			},
		},
	],

	evolveFrom: {
		ja: "スリープ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [97],
};

export default card;
