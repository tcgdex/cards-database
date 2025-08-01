import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Swampert",
		fr: "Laggron",
		es: "Swampert",
		it: "Swampert",
		pt: "Swampert",
		de: "Sumpex"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		260,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio",
		es: "Marshtomp",
		it: "Marshtomp",
		pt: "Marshtomp",
		de: "Moorabbel"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				en: "α Growth",
				fr: "Croissance α",
			},
			effect: {
				en: "When you attach an Energy card from your hand to this Pokémon (except with an attack, Ability, or Trainer card), you may attach 2 Energy cards.",
				fr: "Lorsque vous attachez une carte Énergie de votre main à ce Pokémon (excepté à la suite d'une attaque, d'un talent ou d'une carte Dresseur), vous pouvez attacher 2 cartes Énergie au lieu d'une.",
			},
		}, {
			type: 'Ability',
			name: {
				en: 'Diving Search'
			},
			effect: {
				en: 'Once during your turn (before your attack), you may search your deck for a card. Shuffle your deck, then put that card on top of it.'
			}
		}
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				es: "Hidrobomba",
				it: "Idropompa",
				pt: "Jato d'Água",
				de: "Hydropumpe"
			},
			effect: {
				en: "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Esse ataque causa 30 de danos adicionais para cada Energia Water ligada a este Pokémon.",
				de: "Dieser Angriff fügt 30 weitere Schadenspunkte für jede an dieses Pokémon angelegte Water-Energie zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 273566
	}
}

export default card
