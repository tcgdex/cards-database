import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Mewtwo",
		pt: "Mewtwo",
		fr: "Mewtwo",
		de: "Mewtu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic",
				pt: "Psychic",
				fr: "Psyko",
				de: "Psychokinese"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.",
				pt: "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée au Pokémon Défenseur.",
				de: "Fügt 10 Schadenspunkte plu 10 weitere Schadenspunkte für jede auf dem verteidigenden Pokémon angelegte Energiekarte zu"
			},
			damage: "10+",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Barrier",
				pt: "Barrier",
				fr: "Bouclier",
				de: "Barriere"
			},
			effect: {
				en: "Discard 1 Energy card attached to Mewtwo in order to use this attack. During your opponent's next turn, prevent all effects of attacks, including damage, done to Mewtwo.",
				pt: "Discard 1 Energy card attached to Mewtwo in order to use this attack. During your opponent's next turn, prevent all effects of attacks, including damage, done to Mewtwo.",
				fr: "Défaussez 1 carte Énergie  attachée à Mewtwo pour pouvoir utiliser cette attaque. Pendant le prochain tour de votre adversaire, prévenez tous les effets ou attaques, y compris les dégâts, infligés à Mewtwo.",
				de: "Entferne eine auf Mewtu abgelegte  Energiekarte um diesen Angriff auszuführen. Verhindere während desnächsten gegnerischen Zuges alle Auswirkungen von Angriffen auf Mewtu (einschließlich der Schadenspunkte)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Il est le fruit de nombreuses expériences génétiques horribles et malsaines."
	}
}

export default card
