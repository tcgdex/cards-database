import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Kakuna",
		fr: "Coconfort",
		de: "Kokuna"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		14,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Payback",
				fr: "Retour de poison",
				de: "Giftige Abrechnung"
			},
			effect: {
				en: "If Kakuna is your Active Pokémon and is damaged by an opponent's attack (even if Kakuna is Knocked Out), the Attacking Pokémon is now Poisoned.",
				fr: "Si Coconfort est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Kakuna est mis K.O), le Pokémon Attaquant est maintenant Empoisonné.",
				de: "Wenn Kokuna dein Aktives Pokémon ist und ihm Schaden durch einen gegnerischen Angriff zugefügt wird (auch wenn Kokuna kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Kopfnuss"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276212,
		tcgplayer: 86411
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
