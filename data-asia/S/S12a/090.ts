import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロア",
		'zh-tw': "索羅亞",
		th: "โซรัว",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "普段 おしゃべりな 子どもが 無口に なった ときは ゾロアが 入れ替わって いるかも しれないよ。",
		'zh-tw': "平常很愛說話的孩子如果突然變得很沉默， 就有可能是索羅亞假扮的。",
		th: "เวลาที่เด็กช่างพูดเกิดเงียบขึ้นมา อาจเป็นเพราะโซรัวมาสลับตัวอยู่ก็เป็นได้",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "うしろげり",
				'zh-tw': "後踢",
				th: "เตะกลับหลัง",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687652,
				tcgplayer: 571628,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577475,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [570],
};

export default card;
