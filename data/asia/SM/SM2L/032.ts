import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴロンダ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "腕っぷしが 自慢で 豪快。 ゴロンダの トレーナーに なりたいなら 拳で 語り合う しかない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スカイアッパー" },
			damage: 70,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "マグナムパンチ" },
			damage: 130,
			cost: ["Darkness", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561436,
			},
		},
	],

	evolveFrom: {
		ja: "ヤンチャム",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [675],
};

export default card;
