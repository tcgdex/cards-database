import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ボクレー",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "森で 死んだ 子どもの 魂が 切り株に 宿った。 悲鳴の ような 不気味な 声で 鳴く。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Grass"],
		},
		{
			name: { ja: "あやしいひかり" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561405,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [708],
};

export default card;
