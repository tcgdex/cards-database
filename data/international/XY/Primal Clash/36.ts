import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Swampert",
		'fr-fr': "Laggron",
		'es-es': "Swampert",
		'it-it': "Swampert",
		'pt-br': "Swampert",
		'de-de': "Sumpex"
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
		'en-us': "Marshtomp",
		'fr-fr': "Flobio",
		'es-es': "Marshtomp",
		'it-it': "Marshtomp",
		'pt-br': "Marshtomp",
		'de-de': "Moorabbel"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'en-us': "α Growth",
				'fr-fr': "Croissance α",
			},
			effect: {
				'en-us': "When you attach an Energy card from your hand to this Pokémon (except with an attack, Ability, or Trainer card), you may attach 2 Energy cards.",
				'fr-fr': "Lorsque vous attachez une carte Énergie de votre main à ce Pokémon (excepté à la suite d'une attaque, d'un talent ou d'une carte Dresseur), vous pouvez attacher 2 cartes Énergie au lieu d'une.",
			},
		}, {
			type: 'Ability',
			name: {
				'en-us': 'Diving Search'
			},
			effect: {
				'en-us': 'Once during your turn (before your attack), you may search your deck for a card. Shuffle your deck, then put that card on top of it.'
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
				'en-us': "Hydro Pump",
				'fr-fr': "Hydrocanon",
				'es-es': "Hidrobomba",
				'it-it': "Idropompa",
				'pt-br': "Jato d'Água",
				'de-de': "Hydropumpe"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Water unida a este Pokémon.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				'pt-br': "Esse ataque causa 30 de danos adicionais para cada Energia Water ligada a este Pokémon.",
				'de-de': "Dieser Angriff fügt 30 weitere Schadenspunkte für jede an dieses Pokémon angelegte Water-Energie zu."
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

	description: {
		'en-us': "It can swim while towing a large ship. It bashes down foes with a swing of its thick arms.",
	},

	thirdParty: {
		cardmarket: 273566,
		tcgplayer: 95928
	}
}

export default card
