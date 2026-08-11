import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "バサギリV",
		'zh-tw': "劈斧螳螂V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "いあいぎり",
				'zh-tw': "居合斬",
			},
			damage: 40,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "まさかりスラッシュ",
				'zh-tw': "鉞斬",
			},
			damage: 150,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。その後、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。然後，選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651099,
				tcgplayer: 569883,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [900],
};

export default card;
