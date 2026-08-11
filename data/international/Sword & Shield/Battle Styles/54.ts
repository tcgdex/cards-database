import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [79],
	set: Set,

	name: {
		'en-us': "Galarian Slowpoke",
		'fr-fr': "Ramoloss de Galar",
		'es-es': "Slowpoke de Galar",
		'it-it': "Slowpoke di Galar",
		'pt-br': "Slowpoke de Galar",
		'de-de': "Galar-Flegmon"
	},

	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Tantailizing",
			'fr-fr': "Ragoûtant",
			'es-es': "Cola Tentadora",
			'it-it': "Stuzzicoda",
			'pt-br': "Cauda Apetitosa",
			'de-de': "Ausschweifen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
			'es-es': "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
			'it-it': "Lancia una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
			'pt-br': "Jogue 1 moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
			'de-de': "Wirf 1 Münze. Tausche bei Kopf 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Because Galarian Slowpoke eat the seeds of a plant that grows only in Galar, their tails have developed a spicy flavor."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545381,
				tcgplayer: 234212
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545381,
				tcgplayer: 234212
			}
		},
	],
}

export default card
