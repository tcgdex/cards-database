import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Primal Groudon EX",
		'fr-fr': "Primo-Groudon EX",
		'es-es': "Groudon Primigenio EX",
		'it-it': "Archeo Groudon EX",
		'pt-br': "Groudon Primitivo EX",
		'de-de': "Proto-Groudon EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 240,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Groudon-EX",
		'fr-fr': "Groudon-EX",
		'es-es': "Groudon-EX",
		'it-it': "Groudon-EX",
		'pt-br': "Groudon-EX",
		'de-de': "Groudon-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Gaia Volcano",
				'fr-fr': "Volcan de Gaïa",
				'es-es': "Volcán Gaia",
				'it-it': "Vulcano Gaia",
				'pt-br': "Vulcão Gaia",
				'de-de': "Gaia-Vulkan"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 100 more damage. Discard that Stadium card.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 100 dégâts supplémentaires. Défaussez la carte Stade.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 100 puntos de daño más. Descarta esa carta de Estadio.",
				'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 100 danni in più. Scarta quella carta Stadio.",
				'pt-br': "Se houver algum card de Estádio em jogo, este ataque causará 100 de danos adicionais. Descarte o card de Estádio.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 100 weitere Schadenspunkte zu. Lege diese Stadionkarte auf den Ablagestapel."
			},
			damage: "100+",

		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "{title}:",
			'fr-fr': "{title}:",
			'es-es': "{title}:",
			'it-it': "{title}:",
			'pt-br': "{title}:",
			'de-de': "{title}:"
		},

		effect: {
			'en-us': "{title}: When 1 of your Pokémon becomes this Pokémon, heal all damage from it.",
			'fr-fr': "{title}: Lorsqu'un de vos Pokémon devient ce Pokémon, soignez tous les dégâts de ce Pokémon.",
			'es-es': "{title}: Cuando 1 de tus Pokémon se convierte en este Pokémon, cura todos sus puntos de daño.",
			'it-it': "{title}: Quando uno dei tuoi Pokémon diventa questo Pokémon, curane tutti i danni.",
			'pt-br': "{title}: Quando 1 dos seus Pokémon se tornar este Pokémon, cure todos os danos dele.",
			'de-de': "{title}: Wenn 1 deiner Pokémon zu diesem Pokémon wird, heile allen Schaden bei diesem Pokémon."
		}
	}],

	thirdParty: {
		cardmarket: 284278,
		tcgplayer: 101519
	}
}

export default card
