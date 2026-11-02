import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "スリーパー",
		'zh-tw': "引夢貘人",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "夜に 眠れない 人の ために 病院で お医者さんの 手伝いをする スリーパーも いる。",
		'zh-tw': "為了幫助那些晚上失眠的人，也有些引夢貘人會到 醫院去協助醫生。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "サイケデリックコール",
				'zh-tw': "幻迷呼喚",
			},
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札から1進化ポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張【1階進化】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "しねんのずつき",
				'zh-tw': "意念頭錘",
			},
			damage: 90,
			cost: ["Psychic", "Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667918,
				tcgplayer: 569974,
			},
		},
	],

	evolveFrom: {
		ja: "スリープ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [97],
};

export default card;
