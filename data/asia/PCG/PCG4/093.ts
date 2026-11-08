import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ティラニターエクス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [248],
	hp: 160,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'ja-jp': "粉砕",
			},
			effect: {
				'ja-jp': "プレイ中のスタジアムカードを捨ててください。",
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "脱線",
			},
			effect: {
				'ja-jp': "防御ポケモンに取り付けられた特別なエネルギーカードを捨てます。",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Darkness", "Colorless"],
			name: {
				'ja-jp': "ミックスアップ",
			},
			effect: {
				'ja-jp': "あなたの対戦相手は彼または彼女のデッキの一番上のカードを捨てます。",
			},
			damage: 70,
		},
		{
			cost: ["Fighting", "Darkness", "Darkness", "Colorless"],
			name: {
				'ja-jp': "コントロールを失う",
			},
			effect: {
				'ja-jp': "デッキのトップ3カードを捨ててください。",
			},
			damage: 120,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
