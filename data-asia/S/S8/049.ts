import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラメシヤ",
		'zh-tw': "多龍梅西亞",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "１匹では 子どもにも 負けるくらい 非力だが 仲間の 協力で 鍛えられ 進化して 強くなる。",
		'zh-tw': "雖然單獨１隻弱得甚至敵不過小孩，但會和夥伴合作一起鍛鍊，透過進化而變得更強。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "まとわりつく",
				'zh-tw': "死纏爛打",
			},
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575604,
				tcgplayer: 569550,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [885],
};

export default card;
