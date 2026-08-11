import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤヤコマ",
		'zh-tw': "小箭雀",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	description: {
		ja: "美しい さえずりは 威嚇。 縄張りに 入った ものは 容赦なく 突きまくる。",
		'zh-tw': "婉轉的叫聲是在威嚇對方。對於闖入自己地盤的傢伙 會毫不留情地啄個不停。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つつく",
				'zh-tw': "啄",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667965,
				tcgplayer: 570021,
			},
		},
	],

	retreat: 0,
	regulationMark: "F",
	rarity: "Common",
	dexId: [661],
};

export default card;
