import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨマワル",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "どこまでも 獲物を 追い続ける。 執念深い 性格だが 朝日が 昇ると あきらめる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひとだましんか" },
			effect: {
				ja: "自分の番に1回使える。自分の手札を3枚トラッシュする。その後、このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ふきつなめ" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のポケモン1匹に、ダメカンを2個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556618,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [355],
};

export default card;
