import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
		de: "Xatu"
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
		en: "Natu",
		fr: "Natu"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mirror Coat",
				fr: "Voile miroir",
				de: "Mirror Coat"
			},
			effect: {
				en: "If Xatu is Burned or Poisoned by an opponent's attack (even if Xatu is Knocked Out), the Attacking Pokémon is now affected by the same Special Conditions (1 if there is only 1).",
				fr: "Si Xatu est Brûlé ou Empoisonné par une attaque de votre adversaire (même si Xatu est mis K.O), le Pokémon Attaquant est maintenant affecté par les mêmes États Spéciaux (ou 1 s'il n'y en a qu'1).",
				de: "If Xatu is Burned or Poisoned by an opponent's attack (even if Xatu is Knocked Out), the Attacking Pokémon is now affected by the same Special Conditions (1 if there is only 1)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dazzle Dance",
				fr: "Danse éblouissante",
				de: "Dazzle Dance"
			},
			effect: {
				en: "Each Defending Pokémon is now Confused.",
				fr: "Chaque Pokémon Défenseur est maintenant Confus.",
				de: "Each Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyloop",
				fr: "Psy-boucle",
				de: "Psyloop"
			},
			effect: {
				en: "Does 30 damage plus 30 more damage for each Trainer card your opponent has in play.",
				fr: "Inflige 30 dégâts plus 30 dégâts supplémentaires pour chaque carte Dresseur que votre adversaire a en jeu.",
				de: "Does 30 damage plus 30 more damage for each Trainer card your opponent has in play."
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

	thirdParty: {
		tcgplayer: 90663,
		cardmarket: 276432
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
