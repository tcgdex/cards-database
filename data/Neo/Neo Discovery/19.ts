import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		12,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Metapod",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],

			name: {
				en: "Magic Dust",
				fr: "Poussière magique"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now either Asleep, Confused, Paralyzed, or Poisoned (your choice).",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est Endormi, Confus, Paralysé ou Empoisonné (selon votre choix)."
			},

			damage: 20
		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Hyper Reverse",
				fr: "Hyper Inversion"
			},
			effect: {
				en: "Does 10 damage times the number of Energy cards attached to the Defending Pokémon. After doing damage, remove a number of damage counters from Butterfree equal to the amount of damage done to the Defending Pokémon (after applying Weakness and Resistance).",
				fr: "Infligez 10 dégâts multipliés par le nombre de cartes Énergie attachées au Pokémon Défenseur. Après avoir appliqué les dégâts, retirez autant de marqueurs de dégâts à Papilusion que le Pokémon Défenseur en a reçu (après application de la Faiblesse et de la Résistance)."
			}

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il ramasse du miel tous les jours en le frottant contre les poils de ses pattes pour le rapporter dans son nid."
	}
}

export default card
