import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンチャム",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "親分と 慕う ゴロンダの 真似を する ことで 戦い方や 獲物の 捕まえ方を 学ぶ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "チョップ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 678816,
				tcgplayer: 597486,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [674],
};

export default card;
