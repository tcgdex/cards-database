import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "バチュル",
		'zh-tw': "電電蟲",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "ポケモンの 体に くっついて 静電気を 吸い取る。 自分では 電気を つくることが できない。",
		'zh-tw': "會附在寶可夢的身上 吸收靜電。自身並沒有 製造電的能力。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はねてかわす",
				'zh-tw': "躍起閃避",
			},
			damage: 10,
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
				'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773750,
				tcgplayer: 566252,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [595],
};

export default card;
