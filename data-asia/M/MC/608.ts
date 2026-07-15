import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アオキのワシボン",
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "尖ったツメを 獲物に 突き立て ついばんでいる。 木の実も 食べるが 基本的に 肉食のポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きずをつつく" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863910,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [627],
};

export default card;
