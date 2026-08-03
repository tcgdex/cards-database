import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキカブリ",
		'zh-tw': "雪笠怪",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "お腹に 実る アイス みたいな 木の実は ガラルに 暮らす ダルマッカたちの 大好物。",
		'zh-tw': "雪笠怪肚子上結出來的樹果口感彷如冰棒， 是伽勒爾的火紅不倒翁們的最愛。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はりたおす",
				'zh-tw': "擊倒",
			},
			damage: 60,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586522,
				tcgplayer: 571260,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578357,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [459],
};

export default card;
