import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "Muk Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [89],
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "有毒ガス",
			},
			effect: {
				ja: "Muk Exがあなたのアクティブなポカモンである限り、すべてのPokã©-PowersとPokã©-Bodiesを無視してください。",
			},
		}],

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "毒の息",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "ぬるぬるした水",
			},
			effect: {
				ja: "40のダメージに加えて、防御ポケモンリトリートコストの各無色エネルギーに対してさらに10ダメージを与えます（リトリートコストに効果を適用した後）。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};
