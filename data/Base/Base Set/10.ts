import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
		de: "Mewtu",
		it: "Mewtwo"
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
				fr: "Psyko",
				de: "Psychokinese",
				it: "Psichico"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée au Pokémon Défenseur.",
				de: "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf dem verteidigenden Pokémon abgelegte Energiekarte zu.",
				it: "Infligge 10 danni più altri 10 danni per ogni carta Energia assegnata al Pokémon Difensore."
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
				fr: "Bouclier",
				de: "Barriere",
				it: "Barriera"
			},
			effect: {
				en: "Discard 1 Energy card attached to Mewtwo in order to use this attack. During your opponent's next turn, prevent all effects of attacks, including damage, done to Mewtwo.",
				fr: "Défaussez 1 carte Énergie {P} attachée à Mewtwo pour pouvoir utiliser cette attaque. Pendant le prochain tour de votre adversaire, prévenez tous les effets ou attaques, y compris les dégâts, infligés à Mewtwo.",
				de: "Entferne eine auf Mewtu abgelegte {P} Energiekarte, um diesen Angriff auszuführen. Verhindere während des nächsten gegnerischen Zugs alle Auswirkungen von Angriffen auf Mewtu (einschließlich der Schadenspunkte).",
				it: "Scarta una carta Energia Psico assegnata a Mewtwo per poter usare questo attacco. Durante il prossimo turno del tuo avversario, previeni tutti gli effetti degli attacchi inflitti a Mewtwo, compresi i danni."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		en: "A scientist created this Pokémon after years of horrific gene-splicing and DNA engineering experiments.",
		fr: "Il est le fruit de nombreuses expériences génétiques horribles et malsaines.",
		it: "Questo Pokémon è stato creato da uno scienziato pazzo, dopo anni di esperimenti con mutazioni genetiche e manipolazioni di DNA. LIV 53 N.150",
		de: "Ein Wissenschaftler erschuf dieses Pokémon nach Jahren schrecklicher Gensplitting- und DNS-Experimente."
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273705,
				tcgplayer: 42347
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107005,
				cardmarket: 660218
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107005,
				cardmarket: 660218
			}
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	]
}

export default card
