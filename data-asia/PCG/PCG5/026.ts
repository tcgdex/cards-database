import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ウェイロード",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [321],
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "反応性リフト",
			},
			effect: {
				ja: "WailordにはReact Energy Cardsが付属している限り、Pokã©Mon（Pokã©Mon-Exを除く）のリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "催眠術",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 40,
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "友達に頼ってください",
			},
			effect: {
				ja: "40のダメージと、ベンチされたステージ1の各進化したポケモンに対してさらに10ダメージを与えます。",
			},
		},
	],

	retreat: 4,

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

export default card
