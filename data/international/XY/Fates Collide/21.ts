import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "White Kyurem",
		'fr-fr': "Kyurem Blanc",
		'es-es': "Kyurem Blanco",
		'it-it': "Kyurem Bianco",
		'pt-br': "Kyurem Branco",
		'de-de': "Weißes Kyurem"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 130,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Burning Icicles",
				'fr-fr': "Stalactites Brûlantes",
				'es-es': "Témpanos Ardientes",
				'it-it': "Ghiaccio Ardente",
				'pt-br': "Gelo em Chamas",
				'de-de': "Brennende Eiszapfen"
			},
			effect: {
				'en-us': "If this Pokémon has any Fire Energy attached to it, this attack does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si de l'Énergie Fire est attachée à ce Pokémon, cette attaque inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Si este Pokémon tiene alguna Energía Fire unida a él, este ataque hace 20 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Se questo Pokémon ha delle Energie Fire assegnate, questo attacco infligge 20 danni a due dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Se este Pokémon possuir alguma Energia Fire ligada a ele, este ataque causará 20 de danos a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Wenn an dieses Pokémon bereits Fire-Energie angelegt ist, fügt dieser Angriff 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Blizzard Burn",
				'fr-fr': "Blizzard Étourdissant",
				'es-es': "Quemadura de Hielo",
				'it-it': "Pirobora",
				'pt-br': "Queimadura de Neve",
				'de-de': "Blizzardbrand"
			},
			effect: {
				'en-us': "This Pokémon can't attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It generates a powerful, freezing energy inside itself, but its body became frozen when the energy leaked out.",
	},

	thirdParty: {
		cardmarket: 289847,
		tcgplayer: 117783
	}
}

export default card
