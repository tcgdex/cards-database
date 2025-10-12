import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
		de: "Nachtara"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Moonlight Fang",
				fr: "Croc lunaire",
				de: "Mondscheinfänge"
			},
			effect: {
				en: "During your opponent’s next turn, prevent all effects, including damage, done to Umbreon by attacks from your opponent’s Pokémon that has any Poké-Powers or Poké-Bodies.",
				fr: "Pendant le prochain tour de votre adversaire, prévenez tous les effets d’attaques (y compris les dégâts) infligés à Noctali par un Pokémon de votre adversaire possédant des Poké-Powers ou des Poké-Bodies.",
				de: "Verhindere während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Nachtara von gegnerischen Pokémon, die mindestens 1 Poké-Power oder Poké-Body haben, zugefügt würden."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Quick Blow",
				fr: "Coup d’poing éclair",
				de: "Schnellschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "When agitated, this Pokémon protects itself by spraying poisonous sweat from its pores."
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "cracked-ice"
		}
	],

	thirdParty: {
		cardmarket: 279263,
		tcgplayer: 90145
	}
}

export default card
