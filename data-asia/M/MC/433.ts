import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニドリーナ",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "群れに 危険が せまると 仲間で 結束して 超音波の 大合唱を おみまいするぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あくのめざめ" },
			cost: ["Darkness"],
			effect: {
				ja: "自分の[D]ポケモンを2匹まで選び、そのポケモンから進化するカードを、自分の山札から1枚ずつ選び、それぞれにのせて進化させる。そして山札を切る。",
			},
		},
		{
			name: { ja: "ひっかく" },
			damage: 50,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863735,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のニドラン♀",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [30],
};

export default card;
