import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Vespiquen",
		'fr-fr': "Apireine",
		'es-es': "Vespiquen",
		'it-it': "Vespiquen",
		'pt-br': "Vespiquen",
		'de-de': "Honweisel"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		416,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
		'es-es': "Combee",
		'it-it': "Combee",
		'pt-br': "Combee",
		'de-de': "Wadribie"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bee Drain",
				'fr-fr': "Abeille Épuisante",
				'es-es': "Absorción Abeja",
				'it-it': "Apeassorbi",
				'pt-br': "Dreno de Abelha",
				'de-de': "Bienensauger"
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				'es-es': "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				'pt-br': "Cure deste Pokémon a mesma quantidade de danos que você causou ao Pokémon Ativo do seu oponente.",
				'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-Griffe",
				'es-es': "Golpes Furia",
				'it-it': "Sfuriate",
				'pt-br': "Golpes de Fúria",
				'de-de': "Kratzfurie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

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
			'en-us': "{title}: This Pokémon may have up to 2 Pokémon Tool cards attached to it.",
			'fr-fr': "{title}: Jusqu'à 2 cartes Outil Pokémon peuvent être attachées à ce Pokémon.",
			'es-es': "{title}: Este Pokémon puede tener hasta 2 cartas de Herramienta Pokémon unidas a él.",
			'it-it': "{title}: Questo Pokémon può avere fino a due carte Oggetto Pokémon assegnate.",
			'pt-br': "{title}: Este Pokémon pode ter até dois cards de Ferramenta Pokémon ligados a ele.",
			'de-de': "{title}: An dieses Pokémon können bis zu 2 Pokémon-Ausrüstungen angelegt sein."
		}
	}],

	description: {
		'en-us': "Its abdomen is a honeycomb for grubs. It raises its grubs on honey collected by Combee.",
	},

	thirdParty: {
		cardmarket: 284191,
		tcgplayer: 101436
	}
}

export default card
