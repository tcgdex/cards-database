import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ポニータ",
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "生まれたばかりは 走るのが へた。 仲間と かけっこを するうちに 足腰が 強く 育っていく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エネチャージ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ほのおのしっぽ" },
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863380,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [77],
};

export default card;
