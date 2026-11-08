import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [844],
	set: Set,

	name: {
		'en-us': "Sandaconda V",
		'fr-fr': "Dunaconda V",
		'es-es': "Sandaconda V",
		'it-it': "Sandaconda V",
		'pt-br': "Sandaconda V",
		'de-de': "Sanaconda V"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Wall of Sand",
			'fr-fr': "Muraille de Sable",
			'es-es': "Muro de Arena",
			'it-it': "Murosabbia",
			'pt-br': "Muralha de Areia",
			'de-de': "Sandfeste"
		},

		effect: {
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Land Crush",
			'fr-fr': "Écras'Terre",
			'es-es': "Aterrizaje",
			'it-it': "Schiacciaterra",
			'pt-br': "Aperto de Terra",
			'de-de': "Schollenbrecher"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567197,
				tcgplayer: 241756
			}
		},
	],
}

export default card
