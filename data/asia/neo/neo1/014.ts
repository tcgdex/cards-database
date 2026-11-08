import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミーガニウム",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [154],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "野生の成長",
			},
			effect: {
				'ja-jp': "ミーガニウムが機能している限り、草のポケモンに取り付けられた各草のエネルギーカードは代わりに草を草にします。このパワーは、ミーガニウムが眠っている、混乱し、麻痺している間に機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Grass", "Grass"],
			name: {
				'ja-jp': "なだめるような香り",
			},
			effect: {
				'ja-jp': "防御ポケモンは今眠っています。",
			},
			damage: 40,
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
