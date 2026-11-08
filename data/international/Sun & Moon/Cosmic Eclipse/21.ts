import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Buzzwole",
		'fr-fr': "Mouscoto",
		'es-es': "Buzzwole",
		'it-it': "Buzzwole",
		'pt-br': "Buzzwole",
		'de-de': "Masskito"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		794,
	],

	hp: 130,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Beast Boost",
				'fr-fr': "Boost Chimère",
				'es-es': "Ultraimpulso",
				'it-it': "Ultraboost",
				'pt-br': "Ultraimpulso",
				'de-de': "Bestien-Boost"
			},
			effect: {
				'en-us': "This Pokémon’s attacks do 20 more damage to your opponent’s Active Pokémon for each Prize card you have taken (before applying Weakness and Resistance).",
				'fr-fr': "Pour chaque carte Récompense que vous avez récupérée, les attaques de ce Pokémon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques de este Pokémon hacen 20 puntos de daño más al Pokémon Activo de tu rival por cada carta de Premio que hayas cogido (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Gli attacchi di questo Pokémon infliggono 20 danni in più al Pokémon attivo del tuo avversario per ogni carta Premio che hai preso, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Os ataques deste Pokémon causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente para cada carta de Prêmio que você pegou (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Die Attacken dieses Pokémon fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr mal der Anzahl der von dir genommenen Preiskarten zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Touchdown",
				'fr-fr': "Touchdown",
				'es-es': "Gol",
				'it-it': "Meta",
				'pt-br': "Aterrissagem",
				'de-de': "Touchdown"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Although it's alien to this world and a danger here, it's apparently a common organism in the world where it normally lives.",
	},

	thirdParty: {
		cardmarket: 407759,
		tcgplayer: 201183
	}
}

export default card
