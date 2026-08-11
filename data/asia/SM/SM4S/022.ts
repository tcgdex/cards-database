import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲンガー",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "突然 寒気に 襲われたら ゲンガーに 狙われた 証拠。 逃げる術は ないので 諦めろ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "むしばむのろい" },
			effect: {
				ja: "このポケモンがいるかぎり、相手は手札からエネルギーをポケモンにつけるたび、そのポケモンにダメカンを2個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "あんこく" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560334,
			},
		},
	],

	evolveFrom: {
		ja: "ゴースト",
	},

	retreat: 0,
	rarity: "Rare",
	dexId: [94],
};

export default card;
