import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒマナッツ",
		'zh-tw': "向日種子",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "葉っぱの 裏側に たまった 朝露だけを 飲んで 暮らす。 他には なにも 食べないという。",
		'zh-tw': "只飲用積在葉子背面的朝露來過活。據說除此之外什麼都不吃。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "タネばくだん",
				'zh-tw': "種子炸彈",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667591,
				tcgplayer: 569934,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [191],
};

export default card;
