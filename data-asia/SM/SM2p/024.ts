import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤブクロン",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "不衛生な 場所が 好き。 アローラでは よく ベトベターに 追いまわされる 姿を みかける。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふみならす" },
			cost: ["Psychic"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。",
			},
		},
		{
			name: { ja: "よだれ" },
			damage: 30,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561240,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [568],
};

export default card;
