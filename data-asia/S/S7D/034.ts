import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ニャース",
		'zh-tw': "伽勒爾 喵喵",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "額の 小判は より 黒いほど 硬く 仲間から 尊敬される。 勇猛で 恐れを 知らない。",
		'zh-tw': "額頭上的金幣越黑就越硬，也越能受到夥伴的尊敬。性情勇猛，什麼都不怕。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "なきごえ",
				'zh-tw': "叫聲",
			},
			cost: ["Metal"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-20」點。",
			},
		},
		{
			name: {
				ja: "きりさく",
				'zh-tw': "劈開",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571617,
				tcgplayer: 569357,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [52],
};

export default card;
