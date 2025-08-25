import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Seleroc",
		de: "Lunastein"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		337,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Marvel Eyes",
				fr: "Yeux merveilleux",
				de: "Mirakelaugen"
			},
			effect: {
				en: "If you have Solrock in play, prevent all effects of attacks, including damage, done to any of your Lunatone or Solrock by your opponent's Pokémon LV.X.",
				fr: "Si vous avez Solaroc en jeu, prévenez tous les effets d'attaques, dégâts inclus, infligés à vos Seleroc ou Solaroc par les Pokémon NIV.X de votre adversaire.",
				de: "Wenn du Sonnfel im Spiel hast, verhindere alle Effekte von Angriffen, einschließlich Schaden, die deinen Lunastein und Sonnfel im Spiel von gegnerischen Pokémon LV.X zugefügt würden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Gravity Wave",
				fr: "Vague pesante",
				de: "Schwerkraftwelle"
			},
			effect: {
				en: "Does 30 damage to each of your opponent's Benched Pokémon that doesn't have a Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire qui ne possède pas de Coût de retraite. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners, das Rückzugskosten 0 hat, 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	thirdParty: {
		cardmarket: 278723
	}
}

export default card
