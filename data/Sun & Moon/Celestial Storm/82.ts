import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Palossand-GX",
		fr: "Trépassable-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		770,
	],
	hp: 210,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Sandygast",
		fr: "Bacabouh",
	},
	stage: "Stage1",
	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Eerie Light",
				fr: "Lumière Étrange",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Absorb Life",
				fr: "Absorption",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 100,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sandy Fear-gx",
				fr: "Crainte Ensablée-GX",
			},
			effect: {
				en: "Look at the top 13 cards of your opponent's deck and discard any number of Pokémon you find there. This attack does 60 damage for each card you discarded in this way. Your opponent shuffles the other cards back into their deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Regardez les 13 cartes du dessus du deck de votre adversaire et défaussez-en autant de Pokémon que vous voulez. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon. Votre adversaire mélange les autres cartes avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
