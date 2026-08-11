import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "コマタナ",
		'zh-tw': "駒刀小兵",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "鋭い 刃を 操り 敵を 追い詰める。 河原の 石で 体の 刃を 手入れする。",
		'zh-tw': "揮舞銳利的刀刃將敵人逼向絕境。會用河灘的石頭來精心保養刀刃。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つきさす",
				'zh-tw': "突刺",
			},
			damage: 20,
			cost: ["Metal"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673047,
				tcgplayer: 570812,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570896,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [624],
};

export default card;
