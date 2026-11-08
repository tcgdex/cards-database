import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [626],
	set: Set,

	name: {
		'en-us': "Bouffalant",
		'fr-fr': "Frison",
		'es-es': "Bouffalant",
		'it-it': "Bouffalant",
		'pt-br': "Bouffalant",
		'de-de': "Bisofank"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sap Sipper",
			'fr-fr': "Herbivore",
			'es-es': "Herbívoro",
			'it-it': "Mangiaerba",
			'pt-br': "Engolidor de Seiva",
			'de-de': "Vegetarier"
		},

		effect: {
			'en-us': "This Pokémon's attacks do 60 more damage to your opponent's Grass Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques de ce Pokémon infligent 60 dégâts supplémentaires aux Pokémon Grass de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de este Pokémon hacen 60 puntos de daño más a los Pokémon Grass de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi di questo Pokémon infliggono 60 danni in più ai Pokémon Grass del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques deste Pokémon causam 60 pontos de dano a mais aos Pokémon Grass do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Die Attacken dieses Pokémon fügen den Grass-Pokémon deines Gegners 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Head Charge",
			'fr-fr': "Peignée",
			'es-es': "Ariete",
			'it-it': "Ricciolata",
			'pt-br': "Ataque de Cabeça",
			'de-de': "Steinschädel"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Their fluffy fur absorbs damage, even if they strike foes with a fierce headbutt."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545746,
				tcgplayer: 234160
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545746,
				tcgplayer: 234160
			}
		},
	],
}

export default card
