import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "バシャーモV",
		'zh-tw': "火焰雞V",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "とびひざげり",
				'zh-tw': "飛膝踢",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ほのおのうず",
				'zh-tw': "火焰旋渦",
			},
			damage: 210,
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586534,
				tcgplayer: 571272,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [257],
};

export default card;
