import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [875],

	name: {
		'en-us': "Eiscue",
		'fr-fr': "Bekaglaçon",
		'es-es': "Eiscue",
		'it-it': "Eiscue",
		'pt-br': "Eiscue",
		'de-de': "Kubuin"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Ice Face",
				'fr-fr': "Tête de Gel",
				'es-es': "Cara de Hielo",
				'it-it': "Gelofaccia",
				'pt-br': "Cara de Gelo",
				'de-de': "Tiefkühlkopf"
			},
			effect: {
				'en-us': "If this Pokémon has full HP, it takes 60 less damage from your opponent's attacks (after applying Weakness and Resistance).",
				'fr-fr': "Si ce Pokémon a tous ses PV, il subit 60 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
				'es-es': "Si este Pokémon tiene todos sus PS, los ataques de tu rival le hacen 60 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
				'it-it': "Se questo Pokémon ha tutti i PS, subisce 60 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Se este Pokémon tiver PS cheio, receberá 60 pontos de dano a menos dos ataques do seu oponente (depois de aplicar Fraqueza e Resistência).",
				'de-de': "Wenn dieses Pokémon volle KP hat, werden ihm durch Attacken deines Gegners 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blizzard",
				'fr-fr': "Blizzard",
				'es-es': "Ventisca",
				'it-it': "Bora",
				'pt-br': "Nevasca",
				'de-de': "Blizzard"
			},
			effect: {
				'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 120,
	types: ["Water"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It drifted in on the flow of ocean waters from a frigid place. It keeps its head iced constantly to make sure it stays nice and cold."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457708,
				tcgplayer: 213135
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 883767
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457708,
				tcgplayer: 213135
			}
		},
	],
}

export default card
