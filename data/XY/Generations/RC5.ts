import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		de: "Glurak"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		de: "Glutexo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recall",
				fr: "Récupération",
				de: "Abruf"
			},
			effect: {
				en: "Choose 1 of this Pokémon's attacks from its previous Evolutions and use it as this attack.",
				fr: "Choisissez l'une des attaques de pré-évolutions de ce Pokémon et utilisez-la en tant que cette attaque.",
				de: "Wähle 1 Attacke aus den vorangegangenen Entwicklungsstufen dieses Pokémon und verwende sie für diesen Angriff."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion Blast",
				fr: "Explo-Combustion",
				de: "Brandbombe"
			},
			effect: {
				en: "This Pokémon can't use Combustion Blast during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Explo-Combustion pendant votre prochain tour.",
				de: "Dieses Pokémon kann Brandbombe während deines nächsten Zuges nicht einsetzen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "No matter what happens, if we stick together, we can get past it. Forever and ever.",
		de: "Wenn wir zusammenhalten, können wir alles überstehen, egal, was auch passiert. Für immer und ewig."
	},

	thirdParty: {
		cardmarket: 288405
	}
}

export default card
