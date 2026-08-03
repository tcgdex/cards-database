import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "パウワウ",
		'zh-tw': "小海獅",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "分厚い 脂肪の おかげで 寒い 海も へっちゃらだけど 暖かい 海では ちょっと バテやすいのだ。",
		'zh-tw': "因為有著厚厚的脂肪，所以完全不怕寒冷的海域， 但在溫暖的海裡就有點容易中暑。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ずつき",
				'zh-tw': "頭錘",
			},
			damage: 10,
			cost: ["Water"],
		},
		{
			name: {
				ja: "みずかけ",
				'zh-tw': "潑水",
			},
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667895,
				tcgplayer: 569951,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [86],
};

export default card;
