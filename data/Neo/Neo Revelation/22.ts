import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Raikou",
		fr: "Raikou"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		243,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Legendary Body",
				fr: "Corps légendaire"
			},
			effect: {
				en: "As long as Raikou is your Active Pokémon, Raikou and Energy cards attached to it aren't affected by effects from Trainer cards other than Trainer cards other than Stadium cards. As long as this power is active, discard all Trainer cards attached to Raikou. (This power works even if Raikou is Asleep, Confused, or Paralyzed.)",
				fr: "Tant que Raikou est votre Pokémon Actif, Raikou et les cartes Énergie qui y sont attachées ne sont pas affectés par les cartes Dresseur autres que les cartes Stade. Tant que ce Pouvoir est actif, défaussez toutes les cartes Dresseurs attachées à Raikou. (Ce pouvoir fonctionne même si Raikou est Endormi, Confus ou Paralysé.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Lightning Spark",
				fr: "Fracas d'éclairs"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, flip a coin. If heads, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, lancez une pièce. Si c'est face, choisissez-en un et cette attaque lui inflige 20 dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Un Pokémon qui court de par le monde en poussant des aboiements qui ressemblent à des coups de tonnerre."
	}
}

export default card
