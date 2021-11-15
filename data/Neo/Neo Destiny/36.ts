import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Haunter",
		fr: "Spectrum obscur"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gastly",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Call Back",
				fr: "Retour"
			},
			effect: {
				en: "Put a Baby Pokémon or Basic Pokémon card from your opponent's discard pile onto his or her Bench. Put 1 damage counter on that Pokémon. (You can't use this attack if your Bench is full.)",
				fr: "Placez une carte Bébé Pokémon ou Pokémon de base de la pile de défausse de votre adversaire sur son Banc. Placez un marqueur de dégâts sur ce Pokémon. (Vous ne pouvez pas utiliser cette attaque si le Banc de votre adversaire est plein.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Surround",
				fr: "Encerclement"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi. Si c'est pile, le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire."
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il chasse sa proie silencieusement dans les salles obscures."
	}
}

export default card
