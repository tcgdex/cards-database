import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピッピ",
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [35],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "歌う",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、相手のアクティブなポケモンは眠っています。",
			},

		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "メトロノーム",
			},
			effect: {
				'ja-jp': "対戦相手のアクティブなポケモンの攻撃の1つを選択し、この攻撃として使用します。",
			},

		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575605
			},
		},
		{
			type: "holo",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577032
			},
		},
	],
};

export default card
