import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "シンボラー",
		'zh-tw': "象徵鳥",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーで 空を 飛ぶ。 古代都市の 守り神 とも その遣いとも いわれている。",
		'zh-tw': "利用精神力量在空中飛翔，被稱為古代都市的守護神。也有人認為牠是守護神的使者。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "はんげき",
				'zh-tw': "反擊",
			},
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
				'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置3個傷害指示物。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "サイコダメージ",
				'zh-tw': "精神傷害",
			},
			damage: "30+",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586586,
				tcgplayer: 571323,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578388,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "None",
	dexId: [561],
};

export default card;
