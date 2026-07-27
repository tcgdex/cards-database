import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラブトロスV",
		'zh-tw': "眷戀雲V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "あいのしゅごしん",
				'zh-tw': "愛之守護神",
			},
			effect: {
				ja: "このポケモンがいるかぎり、[P]エネルギーがついている自分のポケモン（「ラブトロスV」をのぞく）全員は、相手のポケモンから特性の効果を受けない。",
				'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有【超】能量的寶可夢（「眷戀雲V」 除外），不會受到對手的寶可夢的特性效果影響。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ブロッサムテール",
				'zh-tw': "花開之尾",
			},
			damage: 100,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモンに好きなようにつける。",
				'zh-tw': "從自己的棄牌區選擇最多2張基本能量卡，以任意方式附於備戰寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656336,
				tcgplayer: 570694,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [905],
};

export default card;
