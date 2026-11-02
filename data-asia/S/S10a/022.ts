import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴースト",
		'zh-tw': "鬼斯通",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "壁をすり抜け 何処にでも 姿 現す 恐ろしき悪霊。 舌で 舐められし者 日に日に 衰弱し 死に至るとの噂。",
		'zh-tw': "能夠穿牆透壁，出現在任何地方的恐怖惡靈。傳說被牠的舌頭舔過的人 將會日漸衰弱，最後喪命。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "のろいのしずく",
				'zh-tw': "詛咒水滴",
			},
			cost: ["Psychic"],
			effect: {
				ja: "ダメカン3個を、相手のポケモンに好きなようにのせる。",
				'zh-tw': "將3個傷害指示物以任意方式放置於對手的寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656321,
				tcgplayer: 570685,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577106,
			},
		},
	],

	evolveFrom: {
		ja: "ゴース",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [93],
};

export default card;
