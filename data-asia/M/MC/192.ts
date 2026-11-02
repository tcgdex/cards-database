import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "レジアイスex",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "レジチャージ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから「基本[W]エネルギー」を2枚まで選び、このポケモンにつける。",
			},
		},
		{
			name: { ja: "アイスプリズン" },
			damage: 140,
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個トラッシュし、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863488,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "None",
	dexId: [378],

	suffix: "EX",
};

export default card;
