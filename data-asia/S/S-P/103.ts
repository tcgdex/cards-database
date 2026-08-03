import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "リザードンV",
		'zh-tw': "冰伊布",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ツメできりさく",
				'zh-tw': "冰雹",
			},
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ほのおのうず",
				'zh-tw': "冰霜颱風",
			},
			damage: 220,
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「冰霜颱風」。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525200,
				tcgplayer: 597304,
			},
		},
	],

	retreat: 3,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [6],
};

export default card;
