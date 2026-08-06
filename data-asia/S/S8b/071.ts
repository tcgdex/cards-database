import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マーイーカ",
		'zh-tw': "好啦魷",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "敵に 発光体の 点滅を 浴びせて 戦意を なくしてしまう。 その 隙に 逃げ出すのだ。",
		'zh-tw': "會讓敵人看到自己閃爍的發光體來讓對方喪失戰意， 然後趁機逃之夭夭。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かいてんアタック",
				'zh-tw': "迴轉攻擊",
			},
			damage: 20,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586587,
				tcgplayer: 571324,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578389,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [686],
};

export default card;
