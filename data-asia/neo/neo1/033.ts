import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "feraligatr",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [160],
	hp: 100,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "バーセルク",
			},
			effect: {
				ja: "手からferaligatrをプレイしたら、コインをひっくり返します。頭の場合は、相手のデッキからトップ5カードを捨ててください。尾の場合、デッキからトップ5カードを捨ててください。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Water", "Water"],
			name: {
				ja: "chomp",
			},
			effect: {
				ja: "Feraligatrのダメージカウンターの数に等しい多数のコインをひっくり返します。この攻撃は、50のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
