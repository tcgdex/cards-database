import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "イワパレス",
		'zh-tw': "岩殿居蟹",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "太い ツメが 最大の 武器。 ドサイドンの プロテクターにさえ ひびを 入れるほど 硬いぞ。",
		'zh-tw': "厚實的鉗子是牠最大的武器。硬度高到甚至能讓超甲狂犀的護具裂開。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "シザークロス",
				'zh-tw': "強化拳",
			},
			damage: "30+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、60ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上附有「寶可夢道具」，則增加90點傷害。",
			},
		},
		{
			name: {
				ja: "ぶちかます",
				'zh-tw': "百萬噸墜落",
			},
			damage: 130,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560420,
				tcgplayer: 569136,
			},
		},
	],

	evolveFrom: {
		ja: "イシズマイ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [558],
};

export default card;
