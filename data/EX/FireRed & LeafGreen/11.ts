import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
		de: "Quappo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Spiral",
				fr: "Spirale",
				de: "Spirale"
			},
			effect: {
				en: "As long as Poliwrath is your Active Pokémon, your opponent's Confused Pokémon can't retreat.",
				fr: "Tant que Tartard est votre Pokémon Actif, le Pokémon Confus de votre adversaire ne peut pas battre en retraite.",
				de: "Solange Quappo dein Aktives Pokémon ist, können die verwirrten Pokémon deines Gegner sich nicht zurückziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Split Spiral Punch",
				fr: "Coup d'poing en demi spirale",
				de: "Spiralhieb"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Throw",
				fr: "Méga lancer",
				de: "Mega Wurf"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 50 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokmeon ein Pokémon-ex ist, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276187,
		tcgplayer: 88276
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
