import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Noivern-GX",
		fr: "Bruyverne-GX",
		de: "UHaFnir-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		715,
	],
	hp: 200,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
		de: "eF-eM"
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Distort",
				fr: "Torsion",
				de: "Knistern"
			},
			effect: {
				en: "Your opponent can't play any Item cards from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
			},
			damage: 50,

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Sonic Volume",
				fr: "Volume Sonique",
				de: "Schallvolumen"
			},
			effect: {
				en: "Your opponent can't play any Special Energy cards from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de carte Énergie spéciale de sa main pendant son prochain tour.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Spezial-Energiekarten aus seiner Hand spielen."
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Boomburst-GX",
				fr: "Bang Sonique-GX",
				de: "Überschallknall-GX"
			},
			effect: {
				en: "This attack does 50 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Diese Attacke fügt jedem Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],





}

export default card
