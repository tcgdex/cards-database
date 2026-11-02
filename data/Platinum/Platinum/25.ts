import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Dustox",
		fr: "Papinox",
		de: "Pudox"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [269],

	hp: 130,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
		de: "Panekon"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Camouflage Pattern",
				fr: "Motif camouflage",
				de: "Tarnmuster"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Dustox by your opponent's Pokémon that is affected by 2 or more Special Conditions.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Papinox par des Pokémon de votre adversaire étant affectés par au moins 2 États Spéciaux.",
				de: "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die Pudox von gegnerischen Pokémon, die von mindestens 2 Speziellen Zuständen betroffen sind, zugefügt würden."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Smogscreen",
				fr: "Para-brouillard",
				de: "Rauchwolke"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chemical Scale",
				fr: "Écaille chimique",
				de: "Chemische Schuppe"
			},
			effect: {
				en: "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, the Defending Pokémon is now Burned and Confused.",
				fr: "Si le Pokémon Défenseur possède des Poké-Powers ou des Poké-Bodies, il est maintenant Brûlé et Confus.",
				de: "Wenn das Verteidigende Pokémon mindestens 1 Poké-Power oder Poké-Body hat, ist es jetzt verbrannt und verwirrt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 85058,
				cardmarket: 278446
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278446,
				tcgplayer: 85058
			}
		}
	],

	retreat: 0
}

export default card
