import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マリィのズルズキン",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "縄張りに 入ってきた 相手を 集団で 打ちのめす。 口から 酸性の 体液を 飛ばす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "うしろげり" },
			damage: 40,
			cost: ["Darkness"],
		},
		{
			name: { ja: "ワイルドタックル" },
			damage: 160,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863766,
			},
		},
	],

	evolveFrom: {
		ja: "マリィのズルッグ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [560],
};

export default card;
