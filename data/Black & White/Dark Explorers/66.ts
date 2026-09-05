import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Krookodile",
		fr: "Crocorible",
		es: "Krookodile",
		it: "Krookodile",
		pt: "Krookodile",
		de: "Rabigator"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		553,
	],

	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
		de: "Rokkaiman"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Clamp",
				fr: "Pince des Ténèbres",
				de: "Dunkler Klammergriff"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 60,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bombast",
				fr: "Arrogance",
				de: "Prahlerei"
			},
			effect: {
				en: "Does 40 damage times the number of Prize cards you have taken.",
				fr: "Inflige 40 dégâts multipliés par le nombre de cartes Récompense que vous avez récupérées.",
				de: "Dieser Angriff fügt 40 Schadenspunkte für jede Preiskarte zu, die du bereits genommen hast."
			},
			damage: 40,

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

	retreat: 3,

	description: {
		en: "They never allow prey to escape. Their jaws are so powerful, they can crush the body of an automobile.",
		de: "Hat es seine Beute erblickt, gibt es kein Entrinnen mehr. Sein mächtiger Kiefer knackt selbst Karosserien."
	},

	thirdParty: {
		cardmarket: 280394,
		tcgplayer: 86543
	}
}

export default card
