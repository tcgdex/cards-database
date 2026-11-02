import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "コライドン",
		'zh-tw': "吃吼霸",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "拳で 大地を 引き裂いたと 古い 探検記に 記された ツバサノオウの 正体らしい。",
		'zh-tw': "雖然是個大胃王， 但不擅長捕食。 會和米立龍聯手捕捉獵物。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ツメできりさく",
				'zh-tw': "頭突",
			},
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ランページファング",
				'zh-tw': "必殺波",
			},
			damage: 190,
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを3個選び、トラッシュする。",
				'zh-tw': "擲2次硬幣，若全部為正面，則增加100點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 692254,
				tcgplayer: 587764,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [1007],
};

export default card;
