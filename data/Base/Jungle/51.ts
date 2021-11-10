import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Wag",
				fr: "Mouvemend'keu"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack Eevee during your opponent's next turn. (Benching either Pokémon ends this effect.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer Évoli pendant le prochain tour de votre adversaire. (Si l'un des deux Pokémon bat en retraite, cet effet prend fin.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Il est capable de copier le code génétique d'un ennemi pour se transformer en son double."
	}
}

export default card
