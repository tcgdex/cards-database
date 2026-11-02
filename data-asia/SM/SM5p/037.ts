import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "アルセウス",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "宇宙が まだ ない ころに 最初に 生まれた ポケモンと 神話の 中で 語られている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はじまりのおきて" },
			effect: {
				ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "トリニティスター" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "このワザは、自分のベンチに[草]と[水]と[雷]ポケモンがいるときにしか使えない。自分の山札にある基本エネルギーを3枚まで、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559787,
			},
		},
	],

	retreat: 1,
	rarity: "Rare Holo",
	dexId: [493],
};

export default card;
