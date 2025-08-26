import { Card } from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		ja: "ラティオス（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [381],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "デュアルオーラ",
			},
			effect: {
				ja: "LatiasまたはLatias Exがプレイしている限り、各プレイヤーの進化したPokã©Mon（Pokã©Mon-Exを除く）はPokã©-Bodiesを使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ダイビング",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "アクアブラスト",
			},
			effect: {
				ja: "ラティオスに取り付けられた水エネルギーを捨てます。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
