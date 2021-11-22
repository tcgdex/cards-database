import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Glalie",
		fr: "Oniglali"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		362,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Snorunt",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Craggy Face",
				fr: "Visage taillé au couteau"
			},
			effect: {
				en: "As long as Glalie is your Active Pokémon, any damage done by attacks from your opponent's Stage 2 Evolved Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				fr: "Tant qu'Oniglali est votre Pokémon Actif, tous dégâts qui lui sont infligés par des attaques de Pokémon Évolués de Niveau 2 de votre adversaire sont réduits de 20 (avant application de la Faiblesse et de la Résistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Intimidation Pebble",
				fr: "Galet intimidant"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Trainer cards or Supporter cards from his or her hand during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur ou de cartes Supporter de sa main lors de son prochain tour."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	description: {
		fr: "Il gèle l'humidité de l'air pour former une armure de glace protectrice autour de son corps."
	}
}

export default card
