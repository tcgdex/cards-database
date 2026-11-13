import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "トサキント",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "背びれ 胸びれ 尾びれが 優雅に たなびくので 水の踊り子 と呼ばれる。"
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきさす" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888629,
				cardtrader: 391490,
				tcgplayer: 695065,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [118],
};

export default card;
