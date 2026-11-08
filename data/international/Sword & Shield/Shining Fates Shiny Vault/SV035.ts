import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [875],
	set: Set,

	name: {
		'fr-fr': "Bekaglaçon",
		'en-us': "Eiscue",
		'es-es': "Eiscue",
		'it-it': "Eiscue",
		'pt-br': "Eiscue",
		'de-de': "Kubuin"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Tête de Gel",
			'en-us': "Ice Face",
			'es-es': "Cara de Hielo",
			'it-it': "Gelofaccia",
			'pt-br': "Cara de Gelo",
			'de-de': "Tiefkühlkopf"
		},

		effect: {
			'fr-fr': "Si ce Pokémon a tous ses PV, il subit 60 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
			'en-us': "If this Pokémon has full HP, it takes 60 less damage from your opponent's attacks (after applying Weakness and Resistance).",
			'es-es': "Si este Pokémon tiene todos sus PS, los ataques de tu rival le hacen 60 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
			'it-it': "Se questo Pokémon ha tutti i PS, subisce 60 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Se este Pokémon tiver PS cheio, receberá 60 pontos de dano a menos dos ataques do seu oponente (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Wenn dieses Pokémon volle KP hat, werden ihm durch Attacken deines Gegners 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Blizzard",
			'en-us': "Blizzard",
			'es-es': "Ventisca",
			'it-it': "Bora",
			'pt-br': "Nevasca",
			'de-de': "Blizzard"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 70,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "It drifted in on the flow of ocean waters from a frigid place. It keeps its head iced constantly to make sure it stays nice and cold."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539563,
				tcgplayer: 232390
			}
		},
	],
}

export default card
