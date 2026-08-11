import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミカルゲ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "５００年前に 悪さをしたため 要石の ひび割れに 体を つなぎとめられてしまった。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ソウルコンプレッサー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるポケモンを4枚まで、トラッシュする。そして山札を切る。",
			},
		},
		{
			name: { ja: "ホロウショット" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558598,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [442],
};

export default card;
