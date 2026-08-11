import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
		'es-es': "Skiploom",
		'it-it': "Skiploom",
		'pt-br': "Skiploom",
		'de-de': "Hubelupf"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",
	illustrator: "kirisAki",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Solar Evolution",
			'fr-fr': "Évolution Solaire",
			'es-es': "Evolución Solar",
			'it-it': "Evoluzione Solare",
			'pt-br': "Solar Evolution",
			'de-de': "Solarentwicklung"
		},

		effect: {
			'en-us': "When you attach an Energy card from your hand to this Pokémon during your turn, you may search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			'fr-fr': "Lorsque vous attachez une carte Énergie de votre main à ce Pokémon pendant votre tour, vous pouvez chercher dans votre deck une carte Évolution de ce Pokémon, puis la placer sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			'es-es': "Cuando unes 1 carta de Energía de tu mano a este Pokémon durante tu turno, puedes buscar en tu baraja 1 carta que evolucione de este Pokémon y ponerla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'it-it': "Quando assegni a questo Pokémon una carta Energia dalla tua mano durante il tuo turno, puoi cercare nel tuo mazzo una carta che si evolve da questo Pokémon e mettercela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "When you attach an Energy card from your hand to this Pokémon during your turn, you may search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			'de-de': "Wenn du während deines Zuges 1 Energiekarte aus deiner Hand an dieses Pokémon anlegst, kannst du dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, durchsuchen und sie auf dieses Pokémon legen, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Spinning Attack",
			'de-de': "Rundumangriff"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,

	evolveFrom: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
		'es-es': "Hoppip",
		'it-it': "Hoppip",
		'pt-br': "Hoppip",
		'de-de': "Hoppspross"
	},

	description: {
		'en-us': "It spreads its petals to absorb sunlight. It also floats in the air to get closer to the sun."
	},

	dexId: [188],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574027,
				tcgplayer: 246815
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574027,
				tcgplayer: 246815
			}
		},
	],
}

export default card
