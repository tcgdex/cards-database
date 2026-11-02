import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Lucario-GX",
		fr: "Lucario-GX",
		de: "Lucario-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 210,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu"
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Aura Strike",
				fr: "Aura Frappante",
				de: "Aura-Schlag"
			},
			effect: {
				en: "If this Pokémon evolved from Riolu during this turn, this attack does 90 more damage.",
				fr: "Si ce Pokémon a évolué de Riolu pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
				de: "Wenn sich dieses Pokémon während dieses Zuges aus Riolu entwickelt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Cyclone Kick",
				fr: "Pied Cyclone",
				de: "Wirbeltritt"
			},

			damage: 130,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cantankerous Beatdown-GX",
				fr: "Dérouillée Revêche-GX",
				de: "Zorniger Niederprügler-GX"
			},
			effect: {
				en: "This attack does 30 damage for each damage counter on this Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
