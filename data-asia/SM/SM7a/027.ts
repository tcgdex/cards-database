import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキブル",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "興奮すると 胸を 打ち鳴らす。 そのたびに 電気火花が 散り 雷鳴が あたりに 響き渡る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "エレキチャージ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[雷]エネルギーを2枚まで、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "こうでんあつナックル" },
			damage: 190,
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、3個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558915,
			},
		},
	],

	evolveFrom: {
		ja: "エレブー",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [466],
};

export default card;
