import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プテラ",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'ja-jp': "琥珀に 残された 遺伝子から 復元させた。 予想以上に 凶暴で 犠牲者も でた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ちょうおんぱ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "かせきのキバ" },
			damage: "90+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチに「ポケモンGX・EX」がいないなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558436,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [142],
};

export default card;
