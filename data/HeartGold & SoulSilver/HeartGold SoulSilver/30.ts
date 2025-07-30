import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Smoochum",
		fr: "Lippouti",
		de: "Kussilla"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		238,
	],

	hp: 30,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				fr: "Joli visage endormi",
				de: "Niedliches Schlafgesicht"
			},
			effect: {
				fr: "Tant que Lippouti reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
				de: "Solange Kussilla schläft, verhindere allen Schaden, der Kussilla durch Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Energy Antics",
				fr: "Singénergies",
				de: "Energiepossen"
			},
			effect: {
				en: "Move an Energy card attached to 1 of your opponent’s Pokémon to another of your opponent’s Pokémon. Smoochum is now Asleep.",
				fr: "Déplacez une carte Énergie attachée à l’un des Pokémon de votre adversaire sur un autre de ses Pokémon. Lippouti est maintenant Endormi.",
				de: "Lege eine an 1 Pokémon deines Gegners angelegte Energiekarte an 1 anderes Pokémon deines Gegners an. Kussilla schläft jetzt."
			},

		},
	],

	retreat: 0,

	description: {
		en: "Its lips are the most sensitive part of its body. It always uses its lips first to examine things."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279002
	}
}

export default card
