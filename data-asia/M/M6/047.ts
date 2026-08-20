import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "マーイーカ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "光の 点滅で 襲ってきた 敵の 戦意を なくしてしまう。 その 隙に 姿を くらますのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はたきおとす" },
			damage: 10,
			cost: ["Darkness"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899950,
				tcgplayer: 709200,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [686],
};

export default card;
