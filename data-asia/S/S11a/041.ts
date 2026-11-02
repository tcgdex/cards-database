import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャスパー",
		'zh-tw': "妙喵",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "いつも 無表情だが じつは 強力な サイコパワーが 漏れ出さないように 必死なのだ。",
		'zh-tw': "雖然一直都面無表情，但是那其實是因為牠在努力不讓自己強大的精神力量漏出。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つぶやく",
				'zh-tw': "囈語",
			},
			damage: 10,
			cost: ["Psychic"],
		},
		{
			name: {
				ja: "ひっぱたく",
				'zh-tw': "重摑",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673039,
				tcgplayer: 570804,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570889,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [677],
};

export default card;
