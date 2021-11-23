import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grimer",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Heavyweight",
				fr: "Poids-lourd"
			},
			effect: {
				en: "As long as there is a Grass Energy attached to Muk, you must pay an additional ColorlessColorless to retreat it.",
				fr: "Tant qu'il y a une Énergie  attachée à Grotadmorv, vous devez payer  supplémentaire pour le faire battre en retraite."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Burning Sludge",
				fr: "Gadoue brûlante"
			},

			effect: {
				en: "Flip a number of coins equal to the amount of Energy attached to Muk. If any of them are heads, the Defending Pokémon is now Poisoned and Burned.",
				fr: "Lancez un nombre de pièces équivalent au nombre d'Énergie  attachées à Grotadmorv. Si vous obtenez au moins une face, le Pokémon Défenseur est maintenant Empoisonné et Brûlé."
			},

			damage: 10
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
