import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "オーロット",
		'zh-tw': "朽木妖",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "森の 木を 伐り倒す 人間を 食べると 恐れられているが 森で 暮らす ポケモンたちには 優しい。",
		'zh-tw': "人們懼怕牠，因為牠據說會吃掉砍倒森林裡樹木的人。 但牠對住在森林裡的寶可夢很親切。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ろうぼくのけっかい",
				'zh-tw': "老樹結界",
			},
			effect: {
				ja: "このポケモンが、相手の「ポケモンV」からワザのダメージを受けてきぜつしても、相手はサイドをとれない。",
				'zh-tw': "這隻寶可夢就算受到對手的「寶可夢【V】」招式的傷害而【氣絕】，對手也無法獲得獎賞卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ギガインパクト",
				'zh-tw': "終極衝擊",
			},
			damage: 150,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667615,
				tcgplayer: 569943,
			},
		},
	],

	evolveFrom: {
		ja: "ボクレー",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [709],
};

export default card;
