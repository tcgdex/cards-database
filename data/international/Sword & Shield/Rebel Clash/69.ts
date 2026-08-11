import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Toxtricity",
		'fr-fr': "Salarsen",
		'es-es': "Toxtricity",
		'it-it': "Toxtricity",
		'pt-br': "Toxtricity",
		'de-de': "Riffex"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [849],
	set: Set,

	evolveFrom: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Poison Shout",
				'fr-fr': "Cri Toxique",
				'es-es': "Grito Venenoso",
				'it-it': "Urlo Velenoso",
				'pt-br': "Grito Venenoso",
				'de-de': "Giftschrei"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncement",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 130,
	types: ["Lightning"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "When this Pokémon sounds as if it's strumming a guitar, it's actually clawing at the protrusions on its chest to generate electricity."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457773,
				tcgplayer: 213153
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457773,
				tcgplayer: 213153
			}
		},
	],
}

export default card
