import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Dustox ex",
		fr: "Papinox ex"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		269,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cascoon",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Safeguard",
				fr: "Rune Protectrice"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Dustox ex by your opponent's Pokémon-ex.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Papinox ex par le Pokémon-ex de votre adversaire."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Silver Wind",
				fr: "Vent argenté"
			},
			effect: {
				en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 30 more damage.",
				fr: "Lors de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 30 dégâts supplémentaires."
			},
			damage: 40,
		},
		{
			cost: [ 'Grass', 'Colorless', 'Colorless' ],
			name: { fr: 'Vent glacial' },
			damage: 70
		}
	],






}

export default card
