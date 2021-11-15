import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Espeon ex",
		fr: "Mentali ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Eevee",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Devo Flash",
				fr: "Devo Flash"
			},
			effect: {
				en: "Once during your turn, when you play Espeon ex from your hand to evolve 1 of your Pokémon, you may choose 1 Evolved Pokémon on your opponent's Bench, remove the highest Stage Evolution card from that Pokémon, and put it back into his or her hand.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Mentali ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir 1 Pokémon Évolué sur le Banc de votre adversaire, retirer à ce Pokémon sa carte Évolution au niveau le plus élevé et la replacer dans la main de votre adversaire."
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
				en: "Snap Tail",
				fr: "Claquement de queue"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyloop",
				fr: "Psy-boucle"
			},
			effect: {
				en: "Does 60 damage plus 30 more damage for each Trainer card your opponent has in play.",
				fr: "Inflige 60 dégâts plus 30 dégâts supplémentaires pour chaque carte Dresseur que votre adversaire a en jeu."
			},
			damage: "60+",

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
