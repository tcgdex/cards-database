import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Entei",
		fr: "Entei"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 60,

	types: [
		"Fire",
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
				en: "As long as Entei is your Active Pokémon, Entei and Energy cards attached to it aren't affected by effects from Trainer cards other than Trainer cards other than Stadium cards. As long as this power is active, discard all Trainer cards attached to Entei. (This power works even if Entei is Asleep, Confused, or Paralyzed.)",
				fr: "Tant que Entei est votre Pokémon Actif, Entei et les cartes Énergie qui y sont attachées ne sont pas affectés par les cartes Dresseur autres que les cartes Stade. Tant que ce Pouvoir est actif, défaussez toutes les cartes Dresseurs attachées à Entei. (Ce pouvoir fonctionne même si Entei est Endormi, Confus ou Paralysé.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Mega Flame",
				fr: "Mega flamme"
			},
			effect: {
				en: "Flip 2 coins. For each tails, discard 1 Energy card from Entei, if it has any.",
				fr: "Lancez 2 pièces. Pour chaque pile, défaussez une carte Énergie  attachée à Entei, le cas échéant."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Un Pokémon qui fonce à travers le monde. On raconte qu'il en naît un nouveau à chaque fois qu'un volcan apparaît à la surface de la Terre."
	}
}

export default card
