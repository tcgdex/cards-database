import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ムウマージ",
		'zh-tw': "莫魯貝可V",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "祟りや 呪いを 振りまくとして 恐れられて きた。 気まぐれに 人を助ける 呪文も 使う。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "サイケこうせん",
				'zh-tw': "電光",
			},
			damage: 20,
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: {
				ja: "くなんのたたり",
				'zh-tw': "電輪",
			},
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンが9個なら、そのポケモンをきぜつさせる。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。然後，將這隻寶可夢與備戰寶可夢互換。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525385,
				tcgplayer: 597340,
			},
		},
	],

	evolveFrom: {
		ja: "ムウマ",
	},

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [429],
};

export default card;
