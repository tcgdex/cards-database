import { Card } from "models/database/card"
import Set from "../Fusion Strike"

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

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Wall of Sand",
			'fr-fr': "Muraille de Sable",
			'de-de': "Sandfeste",
			'es-es': "Muro de Arena",
			'pt-br': "Muralha de Areia",
			'it-it': "Murosabbia"
		},

		effect: {
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Land Crush",
			'fr-fr': "Écras'Terre",
			'de-de': "Schollenbrecher",
			'es-es': "Aterrizaje",
			'pt-br': "Aperto de Terra",
			'it-it': "Schiacciaterra"
		},

		damage: 140
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582988,
				tcgplayer: 253149
			}
		},
	],
}

export default card
