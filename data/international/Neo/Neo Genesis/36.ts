import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'de-de': "Duflor"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Strange Powder",
				'fr-fr': "Poudre étrange",
				'de-de': "Strange Powder"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused; if tails, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus ; si c'est pile, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused; if tails, the Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Sticky Nectar",
				'fr-fr': "Nectar collant",
				'de-de': "Sticky Nectar"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and, until the end of your opponent's next turn, as long as Gloom is your Active Pokémon, the Defending Pokémon can't retreat, and if the effect of an attack, Pokémon Power, or Trainer card would change that player's Active Pokémon, that part of the effect does nothing. If tails, this attack does 20 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires et, jusqu'à la fin du prochain tour de votre adversaire, aussi longtemps qu'Ortide est votre Pokémon Actif, le Pokémon Défenseur ne peut pas battre en retraite, et si l'effet d'une attaque, Pouvoir Pokémon ou carte Dresseur vient à changer le Pokémon Actif de ce joueur, cette partie de l'effet ne fait rien. Si c'est pile, cette attaque inflige 20 dégâts.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and until the end of your opponent's next turn, as long as Gloom is your Active Pokémon, the Defending Pokémon can't retreat, and if the effect of an attack, Pokémon Power, or Trainer card would change that player's Active Pokémon, that part of the effect does nothing. If tails, this attack does 20 damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "What appears to be drool is actually sweet honey. It is very sticky and clings stubbornly if touched.",
		'fr-fr': "Ce qui semble être de la bave est en fait un miel sucré. Il est très collant et adhère obstinément si on le touche."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274436,
				tcgplayer: 85778
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274436,
				tcgplayer: 85778
			}
		}
	]
}

export default card
