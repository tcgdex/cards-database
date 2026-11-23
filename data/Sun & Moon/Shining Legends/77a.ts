import { Card } from "../../../interfaces"
import Set from "../Shining Legends"

const card: Card = {
	name: { en: "Zoroark-GX" },
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [571],
	hp: 210,
	types: ["Darkness"],
	evolveFrom: { en: "Zorua" },
	stage: "Stage1",
	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: { en: "Trade" },
			effect: { en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 2 cards." }
		}
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Riotous Beating" },
			effect: { en: "This attack does 20 damage for each of your Pokémon in play." },
			damage: "20×"
		},
		{
			cost: ["Darkness", "Darkness"],
			name: { en: "Trickster-GX" },
			effect: { en: "Choose 1 of your opponent's Pokémon's attacks and use it as this attack. (You can't use more than 1 GX attack in a game.)" }
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 2,

	variants: [{ type: "holo", subtype: "textured" }],
	thirdParty: { tcgplayer: 198529 }
}

export default card
