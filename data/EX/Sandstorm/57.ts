import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Cacnea",
		fr: "Cacnea",
		de: "Tuska"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		331,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Payback",
				fr: "Retour de poison",
				de: "Giftige Abrechnung"
			},
			effect: {
				en: "If Cacnea is your Active Pokémon and is damaged by an opponent's attack (even if Cacnea is Knocked Out), the Attacking Pokémon is now Poisoned.",
				fr: "Si Cacnea est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Cacnea est mis K.O), le Pokémon Attaquant est maintenant Empoisonné.",
				de: "Wenn Tuska dein Aktives Pokémon ist und ihm Schaden durch einen gegnerischen Angriff zugefügt wird ( auch wenn Tuska kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Light Punch",
				fr: "Poing léger",
				de: "Leichter Hieb"
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

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275834,
		tcgplayer: 84069
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
