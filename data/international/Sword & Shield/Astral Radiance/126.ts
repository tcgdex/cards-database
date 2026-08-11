import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [241],
	set: Set,

	name: {
		'en-us': "Miltank",
		'fr-fr': "Écrémeuh",
		'es-es': "Miltank",
		'it-it': "Miltank",
		'pt-br': "Miltank",
		'de-de': "Miltank"
	},

	illustrator: "saino misaki",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Miracle Body",
			'fr-fr': "Corps Miracle",
			'es-es': "Cuerpo Milagroso",
			'it-it': "Corpo Prodigio",
			'pt-br': "Corpo Milagroso",
			'de-de': "Wundersamer Körper"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon V.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-V de votre adversaire.",
			'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon V de tu rival.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-V del tuo avversario.",
			'pt-br': "Previna todo o dano causado a este Pokémon por ataques dos Pokémon V do seu oponente.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-V deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rout",
			'fr-fr': "Débâcle",
			'es-es': "Esparcir",
			'it-it': "Stanamento",
			'pt-br': "Efeito Cascata",
			'de-de': "Verheerung"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 20 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Miltank produces highly nutritious milk, so it's been supporting the lives of people and other Pokémon since ancient times.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658787,
				tcgplayer: 272363
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658787,
				tcgplayer: 272363
			}
		},
	],
}

export default card
