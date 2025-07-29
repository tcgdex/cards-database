import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune",
		de: "Suicune"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		245,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Legendary Body",
				fr: "Corps légendaire",
				de: "Legendary Body"
			},
			effect: {
				en: "As long as Suicune is your Active Pokémon, Suicune and Energy cards attached to it aren't affected by effects from Trainer cards other than Trainer cards other than Stadium cards. As long as this power is active, discard all Trainer cards attached to Suicune. (This power works even if Suicune is Asleep, Confused, or Paralyzed.)",
				fr: "Tant que Suicune est votre Pokémon Actif, Suicune et les cartes Énergie qui y sont attachées ne sont pas affectés par les cartes Dresseur autres que les cartes Stade. Tant que ce Pouvoir est actif, défaussez toutes les cartes Dresseurs attachées à Suicune. (Ce pouvoir fonctionne même si Suicune est Endormi, Confus ou Paralysé.)",
				de: "As long as Suicune is your Active Pokémon, Suicune and Energy cards attached to it aren't affected by effects from Trainer cards other than Stadium cards. As long as this Power is active, discard any Trainer cards attached to Suicune. (This power works even if Suicune is Asleep, Confused, or Paralyzed.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Crystal Wave",
				fr: "Onde cristal",
				de: "Crystal Wave"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, this attack does 30 damage and, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires. Si c'est pile, cette attaque inflige 30 dégâts et, si votre adversaire a des Pokémon sur son Banc, il ou elle choisit l'un d'entre eux et l'échange avec le Pokémon Défenseur. (Infligez les dégâts avant d'échanger les Pokémon.)",
				de: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, this attack does 30 damage and, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)"
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Un Pokémon qui court de par le monde. On raconte que les vents du Nord se mettent à souffler quand il apparaît."
	},

	thirdParty: {
		cardmarket: 274600
	}
}

export default card
