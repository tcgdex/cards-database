import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Malamar V",
		'fr-fr': "Sepiatroce V",
		'es-es': "Malamar V",
		'it-it': "Malamar V",
		'pt-br': "Malamar V",
		'de-de': "Calamanero V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [687],
	set: Set,

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Drag Off",
				'fr-fr': "Traîne",
				'es-es': "Jalón",
				'it-it': "Trascinato Via",
				'pt-br': "Arrastar para Fora",
				'de-de': "Wegzerren"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 30 damage to the new Active Pokémon.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 30 danni al nuovo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Este ataque causa 30 pontos de dano ao novo Pokémon Ativo.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Diese Attacke fügt dem neuen Aktiven Pokémon 30 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Brain Shake",
				'fr-fr': "Cahot Mental",
				'es-es': "Sacudida Cerebral",
				'it-it': "Scuotimente",
				'pt-br': "Chacoalhada Cerebral",
				'de-de': "Gehirnschütteln"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 210,
	types: ["Darkness"],
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 456513,
				tcgplayer: 213215
			}
		},
	],
}

export default card
