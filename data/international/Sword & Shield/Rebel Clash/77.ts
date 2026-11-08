import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [178],

	name: {
		'en-us': "Xatu",
		'fr-fr': "Xatu",
		'es-es': "Xatu",
		'it-it': "Xatu",
		'pt-br': "Xatu",
		'de-de': "Xatu"
	},

	illustrator: "so-taro",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'es-es': "Natu",
		'it-it': "Natu",
		'pt-br': "Natu",
		'de-de': "Natu"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Warp",
				'fr-fr': "Téléportation d'Énergie",
				'es-es': "Teletransporte Energía",
				'it-it': "Distorsione Energetica",
				'pt-br': "Portal de Energia",
				'de-de': "Energiewarp"
			},
			effect: {
				'en-us': "Move an Energy from 1 of your opponent's Benched Pokémon to their Active Pokémon.",
				'fr-fr': "Déplacez une Énergie de l'un des Pokémon de Banc de votre adversaire vers son Pokémon Actif.",
				'es-es': "Mueve 1 Energía de 1 de los Pokémon en Banca de tu rival a su Pokémon Activo.",
				'it-it': "Sposta un'Energia da uno dei Pokémon nella panchina del tuo avversario al suo Pokémon attivo.",
				'pt-br': "Mova 1 Energia de 1 dos Pokémon no Banco do seu oponente para o Pokémon Ativo dele(a).",
				'de-de': "Verschiebe 1 Energie von 1 Pokémon auf der Bank deines Gegners auf sein Aktives Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psychic",
				'fr-fr': "Psyko",
				'es-es': "Psíquico",
				'it-it': "Psichico",
				'pt-br': "Psíquico",
				'de-de': "Psychokinese"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 120,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "They say that it stays still and quiet because it is seeing both the past and future at the same time."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457803,
				tcgplayer: 213163
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457803,
				tcgplayer: 213163
			}
		},
	],
}

export default card
