import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルーグ",
		'zh-tw': "泥偶巨人",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "体内に エネルギーを 生み出す 永久機関が あると いうが 未だに 解明は されていない。",
		'zh-tw': "雖然有人認為牠體內有著生成能量的永動機，但至今仍未得到證實。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "きょうかパンチ",
				'zh-tw': "強化拳",
			},
			damage: "60+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、90ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上附有「寶可夢道具」，則增加90點傷害。",
			},
		},
		{
			name: {
				ja: "メガトンフォール",
				'zh-tw': "百萬噸墜落",
			},
			damage: 190,
			cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560798,
				tcgplayer: 569259,
			},
		},
	],

	evolveFrom: {
		ja: "ゴビット",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [623],
};

export default card;
