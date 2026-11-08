import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune",
		'de-de': "Suicune"
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
				'en-us': "Legendary Body",
				'fr-fr': "Corps légendaire",
				'de-de': "Legendary Body"
			},
			effect: {
				'en-us': "As long as Suicune is your Active Pokémon, Suicune and Energy cards attached to it aren't affected by effects from Trainer cards other than Trainer cards other than Stadium cards. As long as this power is active, discard all Trainer cards attached to Suicune. (This power works even if Suicune is Asleep, Confused, or Paralyzed.)",
				'fr-fr': "Tant que Suicune est votre Pokémon Actif, Suicune et les cartes Énergie qui y sont attachées ne sont pas affectés par les cartes Dresseur autres que les cartes Stade. Tant que ce Pouvoir est actif, défaussez toutes les cartes Dresseurs attachées à Suicune. (Ce pouvoir fonctionne même si Suicune est Endormi, Confus ou Paralysé.)",
				'de-de': "As long as Suicune is your Active Pokémon, Suicune and Energy cards attached to it aren't affected by effects from Trainer cards other than Stadium cards. As long as this Power is active, discard any Trainer cards attached to Suicune. (This power works even if Suicune is Asleep, Confused, or Paralyzed.)"
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
				'en-us': "Crystal Wave",
				'fr-fr': "Onde cristal",
				'de-de': "Crystal Wave"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, this attack does 30 damage and, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires. Si c'est pile, cette attaque inflige 30 dégâts et, si votre adversaire a des Pokémon sur son Banc, il ou elle choisit l'un d'entre eux et l'échange avec le Pokémon Défenseur. (Infligez les dégâts avant d'échanger les Pokémon.)",
				'de-de': "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, this attack does 30 damage and, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)"
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
		'en-us': "This Pokémon races across the land. It is said that north winds will somehow blow whenever it appears.",
		'fr-fr': "Un Pokémon qui court de par le monde. On raconte que les vents du Nord se mettent à souffler quand il apparaît."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274600,
				tcgplayer: 89599
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274600,
				tcgplayer: 89599
			}
		}
	]
}

export default card

