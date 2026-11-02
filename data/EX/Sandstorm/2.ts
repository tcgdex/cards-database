import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Cacturne",
		fr: "Cacturne",
		de: "Noktuska"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [332],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
		de: "Tuska"
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
				en: "If Cacturne is your Active Pokémon and is damaged by an opponent's attack (even if Cacturne is Knocked Out), the Attacking Pokémon is now Poisoned.",
				fr: "Si Cacturne est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Cacturne est mis K.O), le Pokémon Attaquant est maintenant Empoisonné.",
				de: "Wenn Noktuska dein Aktives Pokémon ist und ihm Schaden durch einen gegnerischen Angriff zugefügt wird (auch wenn Noktuska kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte",
				de: "Finte"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies or any other effects on that Pokémon.",
				fr: "Choisissez un des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 40 Schadenspunkte zu. Schwäche, Resistenz, Poké-Powers, Poké-Bodies und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275779,
				tcgplayer: 84078
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275779,
				tcgplayer: 84078
			}
		},
	],

}

export default card
