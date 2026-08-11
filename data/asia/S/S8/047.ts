import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ムシャーナ",
		'zh-tw': "夢夢蝕",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "いつも まどろみ 夢を 見ている。 寝起きは とっても 不機嫌に なるので そっとして おこう。",
		'zh-tw': "總是在打瞌睡作夢。剛睡醒的時候會鬧脾氣，所以最好別去招惹牠。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ねむりにさそう",
				'zh-tw': "誘導睡眠",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをねむりにする。",
				'zh-tw': "選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。然後，將新上場的寶可夢【睡眠】。",
			},
		},
		{
			name: {
				ja: "サイコキネシス",
				'zh-tw': "精神強念",
			},
			damage: "30+",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575602,
				tcgplayer: 569548,
			},
		},
	],

	evolveFrom: {
		ja: "ムンナ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [518],
};

export default card;
