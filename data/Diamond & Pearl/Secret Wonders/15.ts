import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew",
		de: "Mew"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Psychic Balance",
				fr: "Équilibre psy",
				de: "Psycho-Ausgleich"
			},
			effect: {
				en: "If you have less cards in your hand than your opponent, draw cards until you have the same number of cards as your opponent. (If you have more or the same number of cards in your hand as your opponent, this attack does nothing.)",
				fr: "Si vous avez moins de cartes en main que votre adversaire, piochez des cartes jusqu'à ce que vous en ayez autant que lui. (Si vous avez plus ou autant de cartes en main que votre adversaire, cette attaque est sans effet.)",
				de: "Wenn du weniger Karten auf der Hand hast als dein Gegner, ziehe so viele Karten von deinem Deck, bis du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner. (Dieser Angriff hat keine Auswirkungen, wenn du nicht weniger Karten auf der Hand hast als dein Gegner.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Re-creation",
				fr: "Re-création",
				de: "Nachstellung"
			},
			effect: {
				en: "Choose an attack on 1 of your opponent's Pokémon in his or her discard pile. Re-creation copies that attack except for its Energy cost. (You must still do anything else required for that attack.) Mew performs that attack.",
				fr: "Choisissez une attaque d'1 des Pokémon de votre adversaire se trouvant dans sa pile de défausse. Re-création copie cette attaque (sauf son Coût en Énergie). (Vous devez toujours faire ce qu'indique l'attaque.) Mew utilise cette attaque.",
				de: "Wähle 1 Angriff einer Pokémon-Karte im Ablagestapel deines Gegners. Nachstellung kopiert diesen Angriff, mit Ausnahme der Energiekosten. (Du musst immer noch alles tun, was verlangt wird, um diesen Angriff durchzuführen.) Mew führt diesen Angriff aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277768
	}
}

export default card
