import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
		es: "Sigilyph",
		it: "Sigilyph",
		pt: "Sigilyph",
		de: "Symvolara"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		561,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Reflect",
				fr: "Protection",
				de: "Reflektor"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 40 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 40 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Telekinesis",
				fr: "Lévikinésie",
				de: "Telekinese"
			},
			effect: {
				en: "Does 50 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Inflige 50 dégâts à 1 des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Dieser Angriff fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "The guardians of an ancient city, they use their psychic power to attack enemies that invade their territory.",
		de: "Einst war es der Wächter einer Stadt aus uralten Zeiten. Wer sich in sein Revier wagt, lernt seine Psycho-Kräfte kennen."
	},

	thirdParty: {
		cardmarket: 280006,
		tcgplayer: 89204
	}
}

export default card
