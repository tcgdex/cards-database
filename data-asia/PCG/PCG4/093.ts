import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ティラニターエクス",
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
				ja: "粉砕",
			},
			effect: {
				ja: "プレイ中のスタジアムカードを捨ててください。",
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "脱線",
			},
			effect: {
				ja: "防御ポケモンに取り付けられた特別なエネルギーカードを捨てます。",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Darkness", "Colorless"],
			name: {
				ja: "ミックスアップ",
			},
			effect: {
				ja: "あなたの対戦相手は彼または彼女のデッキの一番上のカードを捨てます。",
			},
			damage: 70,
		},
		{
			cost: ["Fighting", "Darkness", "Darkness", "Colorless"],
			name: {
				ja: "コントロールを失う",
			},
			effect: {
				ja: "デッキのトップ3カードを捨ててください。",
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
