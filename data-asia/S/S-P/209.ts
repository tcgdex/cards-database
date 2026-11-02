import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "チルタリス",
		'zh-tw': "露璃娜",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "晴れた日 綿雲に まぎれながら 大空を 自由に 飛び回り 美しい ソプラノで 歌う。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いざなうしらべ" },
			effect: {
				ja: "自分の番に1回使える。自分の山札からサポートを1枚選び、相手に見せる。残りの山札を切り、選んだカードを山札の上にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かっくう" },
			damage: 60,
			cost: ["Water", "Metal"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 568803,
				tcgplayer: 597393,
			},
		},
	],

	evolveFrom: {
		ja: "チルット",
	},

	retreat: 0,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [334],
};

export default card;
