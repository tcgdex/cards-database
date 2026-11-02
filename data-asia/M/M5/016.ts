import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ジーランス",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "岩のように 硬い ウロコと 脂の 詰まった 浮袋で 深海の 水圧に 耐える。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フォッシルビート" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "名前に「古びた」とつく自分のベンチポケモンの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888253,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [369],
};

export default card;
