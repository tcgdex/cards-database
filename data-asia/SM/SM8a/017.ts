import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンチャム",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "咥えている 葉っぱに 意味は なく ただの かっこつけ。 やんちゃなので 素人トレーナーには 向かない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つっぱり" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。オモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558591,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [674],
};

export default card;
