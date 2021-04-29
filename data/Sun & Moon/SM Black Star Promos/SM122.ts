import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Zygarde-GX",
		fr: "Zygarde-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		718,
	],
	hp: 180,
	types: [
		"Fightning",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Vibration",
				fr: "Vibration",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cell Storm",
				fr: "Tempête Cellulaire",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 80,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Liberation-GX",
				fr: "Libération-GX",
			},
			effect: {
				en: "Your opponent reveals their hand. This attack does 120 damage for each Energy card you find there. (You can't use more than 1 GX attack in a game.)",
				fr: "Votre adversaire dévoile sa main. Cette attaque inflige 120 dégâts pour chaque carte Énergie que vous y trouvez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 120,

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
