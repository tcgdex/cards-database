import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
		de: "Woingenau"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [202],

	hp: 80,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Safeguard",
				fr: "Rune protectrice",
				de: "Bodyguard"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Wobbuffet by your opponent's Pokémon-ex.",
				fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Qulbutoké par le Pokémon-ex de votre adversaire.",
				de: "Verhindere alle Effekte von Angriffen inklusive Schaden, die Woingenau von gegnerischen Pokémon-ex zugefügt werden."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flip Over",
				fr: "Faire ressort",
				de: "Umstoßen"
			},
			effect: {
				en: "Wobbuffet does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
				fr: "Qulbutoké s'inflige 10 dégâts. Vous ne pouvez pas appliquer la Faiblesse et la Résistance à ces dégâts.",
				de: "Woingenau fügt sich selbst 10 Schadenspunkte zu. Wende keine Schwäche und Resistenz bei diesem Schaden an."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275803,
				tcgplayer: 90613
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275803,
				tcgplayer: 90613
			}
		},
		{
			type: "normal",
			stamp: ["reed-weichler"],
			thirdParty: {
				cardmarket: 871826,
				tcgplayer: 477464
			}
		},
		{
			type: "normal",
			stamp: ["curran-hill"],
			thirdParty: {
				cardmarket: 871513,
				tcgplayer: 477597
			}
		}
	],

}

export default card
