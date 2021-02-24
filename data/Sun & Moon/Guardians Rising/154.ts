import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Toxapex-GX",
		fr: "Prédastérie-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		748,
	],
	hp: 210,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Spike Cannon",
				fr: "Picanon",
			},
			effect: {
				en: "Flip 4 coins. This attack does 30 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Super Intense Poison",
				fr: "Poison Super Intense",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 10 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 10 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Total Shelter-GX",
				fr: "Refuge Complet-GX",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
				fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
