import { Card } from "../../../interfaces"
import Set from "../Shining Legends"

const card: Card = {
	name: { en: "Entei-GX" },
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [244],
	hp: 180,
	types: ["Fire"],
	stage: "Basic",
	suffix: "GX",

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: { en: "Combustion" },
			damage: 50
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: { en: "Fire Fang" },
			effect: { en: "Your opponent's Active Pokémon is now Burned." },
			damage: 100
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: { en: "Brave Burn-GX" },
			effect: { en: "This attack does 150 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)" }
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 2,

	variants: [{ type: "holo" }],
	thirdParty: { tcgplayer: 164234 }
}

export default card
