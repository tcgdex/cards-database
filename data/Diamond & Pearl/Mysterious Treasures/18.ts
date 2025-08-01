import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Uxie",
		fr: "Créhelf",
		de: "Selfe"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		480,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Memory Out",
				fr: "Trou de mémoire",
				de: "Gedächtnisschwund"
			},
			effect: {
				en: "Once during your opponent's turn, if Uxie is damaged by an opponent's attack (even if Uxie is Knocked Out), you may use this power. The Attacking Pokémon can't use that attack during your opponent's next turn.",
				fr: "Une seule fois lors du tour de votre adversaire, si une attaque de votre adversaire inflige des dégâts à Créhelf (même si Créhelf est mis K.O.), vous pouvez utiliser ce pouvoir. Le Pokémon Attaquant ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
				de: "Einmal während des Zuges deines Gegners kannst du, wenn Selfe durch einen gegnerischen Angriff Schaden erhält (auch wenn Selfe dadurch kampfunfähig wird), diese Poké-Power benutzen. Das Angreifende Pokémon kann diesen Angriff im nächsten Zug deines Gegners nicht einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Mind Off",
				fr: "Neutralisateur d'esprit",
				de: "Verstand abschalten"
			},
			effect: {
				en: "If you have Mesprit and Azelf in play, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Asleep.",
				fr: "Si vous avez Créfollet et Créfadet en jeu, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Endormi.",
				de: "Wenn du Vesprit und Tobutz im Spiel hast, fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu und das Verteidigende Pokémon schläft jetzt."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	description: {
		fr: "On l'appelle \"être du savoir\". On raconte que son regard a le pouvoir d'effacer la mémoire."
	},

	thirdParty: {
		cardmarket: 277647,
		tcgplayer: 90259
	}
}

export default card
