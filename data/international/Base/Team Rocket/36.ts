import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Gloom",
		'fr-fr': "Ortide obscur",
		'de-de': "Dunkles Duflor"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 50,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Pollen Stench",
				'fr-fr': "Pollen puant",
				'de-de': "Pollengestank"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Confused; if tails, your Active Pokémon is now Confused. This power can't be used if Dark Gloom is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus ; si c'est pile, votre Pokémon Actif est maintenant Confus. Ce pouvoir ne peut être utilisé si Ortide obscur est Endormi, Confus ou Paralysé.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) darfst du eine Münze werfen. Bei 'Kopf' ist das verteidigende Pokémon jetzt verwirrt. Diese Fähigkeit kann nicht gespielt werden, falls Dunkles Duflor schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Poisonpowder",
				'fr-fr': "Poudre toxik",
				'de-de': "Giftpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das vertdidigende Pokémon ist jetzt vergiftet."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Its pollen has such a strong smell that it even confuses itself at times.",
		'fr-fr': "Son pollen sent si fort qu'il s'étourdit parfois lui-même."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274089,
				tcgplayer: 84600
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274089,
				tcgplayer: 84600
			}
		}
	]
}

export default card
