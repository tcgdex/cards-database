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
				en: "Twilight Eyes",
				fr: "Regard du Crépuscule",
				de: "Zwielichtaugen"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez défausser une Énergie attachée au Pokémon Actif de votre adversaire.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 an das Aktive Pokémon deines Gegners angelegte Energie auf seinen Ablagestapel legen."
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
				en: "Accelerock",
				fr: "Vif Roc",
				de: "Turbofelsen"
			},

			damage: 120,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Splintered Shards-GX",
				fr: "Roches-Lames-GX",
				de: "Splitterregen-GX"
			},
			effect: {
				en: "This attack does 30 damage for each Energy card in your opponent's discard pile. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 30 dégâts pour chaque carte Énergie dans la pile de défausse de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der Energiekarten im Ablagestapel deines Gegners zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 30,

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
