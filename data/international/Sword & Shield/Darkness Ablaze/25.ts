import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [485],

	name: {
		'en-us': "Heatran",
		'fr-fr': "Heatran",
		'es-es': "Heatran",
		'it-it': "Heatran",
		'pt-br': "Heatran",
		'de-de': "Heatran"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Fire",
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Fang",
				'fr-fr': "Crocs Feu",
				'es-es': "Colmillo Ígneo",
				'it-it': "Rogodenti",
				'pt-br': "Presas de Fogo",
				'de-de': "Feuerzahn"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Raging Flare",
				'fr-fr': "Flambée Furieuse",
				'es-es': "Llama Furiosa",
				'it-it': "Fiammata Furente",
				'pt-br': "Chamas Ferozes",
				'de-de': "Tobende Flamme"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Boiling blood, like magma, circulates through its body. It makes its dwelling place in volcanic caves."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 482999,
				tcgplayer: 219238
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482999,
				tcgplayer: 219238
			}
		},
	],
}

export default card
