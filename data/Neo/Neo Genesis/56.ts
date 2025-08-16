import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Cyndaquil",
		fr: "Héricendre",
		de: "Feurigel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		155,
	],

	hp: 40,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leer",
				fr: "Groz'yeux",
				de: "Leer"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack Cyndaquil during your opponent's next turn. (Benching or evolving either Pokémon ends this effect.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer Héricendre pendant le prochain tour de votre adversaire. (Envoyer l'un des deux Pokémon sur son Banc ou le faire évoluer met fin à cet effet.)",
				de: "Flip a coin. If heads, the Defending Pokémon can't attack Cyndaquil during your opponent's next turn. (Benching or evolving either Pokémon ends this effect.)"
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Swift",
				fr: "Météores",
				de: "Swift"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Pouvoir Pokémon ou tout autre effet sur le Pokémon Défenseur.",
				de: "This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Il demeure habituellement courbé en avant. S'il est en colère ou surpris, il lance des flammes depuis son dos."
	},

	thirdParty: {
		cardmarket: 274456,
		tcgplayer: 84543
	}
}

export default card
