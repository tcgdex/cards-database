import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune",
		de: "Suicune"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [245],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mirror Coat",
				fr: "Voile miroir",
				de: "Spiegelcape"
			},
			effect: {
				en: "If Suicune is Burned or Poisoned by an opponent's attack (even if Suicune is Knocked Out), the Attacking Pokémon is now affected by the same Special Conditions (1 if there is only 1).",
				fr: "Si Suicune est Brûlé ou Empoisonné par une attaque de votre adversaire (même si Suicune est mis K.O.), le Pokémon Attaquant est maintenant affecté par les mêmes États Spéciaux (ou 1 s'il n'y en a qu'1).",
				de: "Wenn Suicune durch einen Angriff deines Gegners verbrannt oder vergiftet wird (auch wenn Suicune kampfunfähig wird), wird das Angreifende Pokémon jetzt auch von diesen Speziellen Zuständen betroffen (1 falls nur 1 vorhanden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Bubblebeam",
				fr: "Bulles d'O",
				de: "Blubbstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89602,
				cardmarket: 277435
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89602,
				cardmarket: 277435
			},
		},
	],

}

export default card
