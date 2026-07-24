import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "グランブル",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Fairy"],

	description: {
		ja: "ブルー 以上に 臆病。 見た目との ギャップが うけて 若い 女性に 大人気。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スッカラカン" },
			damage: "30+",
			cost: ["Fairy"],
			effect: {
				ja: "自分の手札が1枚もないなら、130ダメージ追加。",
			},
		},
		{
			name: { ja: "きょだいなキバ" },
			damage: 110,
			cost: ["Fairy", "Fairy", "Fairy"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558704,
			},
		},
	],

	evolveFrom: {
		ja: "ブルー",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [210],
};

export default card;
