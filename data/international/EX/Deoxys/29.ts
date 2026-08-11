import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Xatu",
		'fr-fr': "Xatu",
		'de-de': "Xatu"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		178,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Natu",
		'fr-fr': "Natu"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Mirror Coat",
				'fr-fr': "Voile miroir",
				'de-de': "Mirror Coat"
			},
			effect: {
				'en-us': "If Xatu is Burned or Poisoned by an opponent's attack (even if Xatu is Knocked Out), the Attacking Pokémon is now affected by the same Special Conditions (1 if there is only 1).",
				'fr-fr': "Si Xatu est Brûlé ou Empoisonné par une attaque de votre adversaire (même si Xatu est mis K.O), le Pokémon Attaquant est maintenant affecté par les mêmes États Spéciaux (ou 1 s'il n'y en a qu'1).",
				'de-de': "If Xatu is Burned or Poisoned by an opponent's attack (even if Xatu is Knocked Out), the Attacking Pokémon is now affected by the same Special Conditions (1 if there is only 1)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dazzle Dance",
				'fr-fr': "Danse éblouissante",
				'de-de': "Dazzle Dance"
			},
			effect: {
				'en-us': "Each Defending Pokémon is now Confused.",
				'fr-fr': "Chaque Pokémon Défenseur est maintenant Confus.",
				'de-de': "Each Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psyloop",
				'fr-fr': "Psy-boucle",
				'de-de': "Psyloop"
			},
			effect: {
				'en-us': "Does 30 damage plus 30 more damage for each Trainer card your opponent has in play.",
				'fr-fr': "Inflige 30 dégâts plus 30 dégâts supplémentaires pour chaque carte Dresseur que votre adversaire a en jeu.",
				'de-de': "Does 30 damage plus 30 more damage for each Trainer card your opponent has in play."
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

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90663,
				cardmarket: 276432
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 90663,
				cardmarket: 276432
			},
		},
	],

}

export default card
