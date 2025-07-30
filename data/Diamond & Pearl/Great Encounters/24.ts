import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Mawile",
		fr: "Mysdibule",
		de: "Flunkifer"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		303,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Pick Out",
				fr: "Choisir",
				de: "Aussuchen"
			},
			effect: {
				en: "Choose 1 face-down Prize card (yours or your opponent's) and put it face up. If that card is a Supporter card, use the effect of that card as the effect of this attack. (That card remains face up for the rest of the game.)",
				fr: "Choisissez 1 carte Récompense face cachée (1 des vôtres ou 1 de celles de votre adversaire) et retournez-la. Si c'est une carte Supporter, utilisez l'effet de cette carte comme l'effet de cette attaque. (Cette carte reste retournée jusqu'à la fin de la partie.)",
				de: "Wähle einen verdeckten Preis (einen eigenen oder gegnerischen) und decke ihn auf. Wenn der gewählte Preis eine Unterstützerkarte ist, nutze ihren Effekt als Effekt dieses Angriffs. (Der gewählte Preis wird nicht wieder verdeckt.)"
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Jaw Bite",
				fr: "Morsure de mâchoire",
				de: "Kieferzange"
			},
			effect: {
				en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage.",
				fr: "Lors de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 20 dégâts supplémentaires.",
				de: "Während deines nächsten Zuges, wenn ein Angriff dem Verteidigenden Pokémon Schaden zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277926,
		tcgplayer: 87261
	}
}

export default card
