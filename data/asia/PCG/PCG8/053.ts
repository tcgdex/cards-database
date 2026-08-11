import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "タウロス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [128],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "チャンスをつぶします",
			},
			effect: {
				ja: "ターン中に、手からタウロスをベンチに置いたら、スタジアムカードを捨てることができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "家族を呼びます",
			},
			effect: {
				ja: "デッキを最大2つの基本的なポケモンを検索し、ベンチに置きます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ホーン攻撃",
			},
			damage: 20,
		},
	],

	retreat: 1,

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
