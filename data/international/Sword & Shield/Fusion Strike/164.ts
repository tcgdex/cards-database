import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [359],
	set: Set,

	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'es-es': "Absol",
		'it-it': "Absol",
		'pt-br': "Absol",
		'de-de': "Absol"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Eri Yamaki",

	description: {
		'en-us': "The elderly call it the disaster Pokémon and detest it, but interest in its power to predict disasters is on the rise."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Drag Off",
			'fr-fr': "Traîne",
			'de-de': "Wegzerren",
			'es-es': "Jalón",
			'pt-br': "Arrastar para Fora",
			'it-it': "Trascinato Via"
		},

		effect: {
			'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 30 damage to the new Active Pokémon.",
			'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
			'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Diese Attacke fügt dem neuen Aktiven Pokémon 30 Schadenspunkte zu.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo.",
			'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Este ataque causa 30 pontos de dano ao novo Pokémon Ativo.",
			'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 30 danni al nuovo Pokémon attivo."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'de-de': "Schlitzer",
			'es-es': "Cuchillada",
			'pt-br': "Talho",
			'it-it': "Lacerazione"
		},

		damage: 80
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582792,
				tcgplayer: 253378
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582792,
				tcgplayer: 253378
			}
		},
	],
}

export default card
