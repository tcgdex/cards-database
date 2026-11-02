import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル フリーザーV",
		'zh-tw': "伽勒爾 急凍鳥V",
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
				ja: "さいこうちく",
				'zh-tw': "再構築",
			},
			effect: {
				ja: "自分の番に、自分の手札を2枚トラッシュするなら、1回使える。自分の山札を1枚引く。",
				'zh-tw': "在自己的回合時，若將自己的2張手牌丟棄，則可使用1次。從自己的牌庫抽出1張卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "サイコビーム",
				'zh-tw': "精神光束",
			},
			damage: 110,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586576,
				tcgplayer: 571313,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [144],
};

export default card;
