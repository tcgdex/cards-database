import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Lycanroc-GX",
		fr: "Lougaroc-GX",
		de: "Wolwerock-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		745,
	],
	hp: 200,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
		de: "Wuffels"
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bloodthirsty Eyes",
				fr: "Regard Sanguinaire",
				de: "Blutrünstige Augen"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe",
				de: "Klauenschlitzer"
			},

			damage: 110,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dangerous Rogue-GX",
				fr: "Dangereux Truand-GX",
				de: "Gaunergefahr-GX"
			},
			effect: {
				en: "This attack does 50 damage for each of your opponent's Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts pour chaque Pokémon de Banc de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Pokémon auf der Bank deines Gegners zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
