import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤミラミ",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "暗い 洞窟に 棲み処を 作り 鋭い ツメを 使って 宝石を 掘り出しては 食べる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ツメできりさく" },
			damage: 20,
			cost: ["Darkness"],
		},
		{
			name: { ja: "ダメージコレクト" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンにのっているダメカンを好きなだけ選び、相手のバトルポケモンにのせ替える。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863755,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [302],
};

export default card;
