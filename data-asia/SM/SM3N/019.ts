import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨマワル",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "どこまでも 獲物を 追い続ける。 執念深い 性格だが 朝日が 昇ると あきらめる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やみあんない" },
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュにあるたねポケモンを1枚、ベンチに出す。",
			},
		},
		{
			name: { ja: "Attack 2" },
			damage: 20,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561019,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [355],
};

export default card;
