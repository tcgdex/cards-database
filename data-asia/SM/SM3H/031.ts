import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ナゲツケサル",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "２０匹前後の グループを つくる。 その結束は 非常に 固く 絶対 仲間を 見捨てない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "パンチ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ワイルドピッチ" },
			damage: 90,
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "自分の手札にある「ポケモンのどうぐ」を、1枚トラッシュする。トラッシュできないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561095,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [766],
};

export default card;
