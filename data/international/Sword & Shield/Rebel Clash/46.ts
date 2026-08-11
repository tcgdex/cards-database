import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [537],

	name: {
		'en-us': "Seismitoad",
		'fr-fr': "Crapustule",
		'es-es': "Seismitoad",
		'it-it': "Seismitoad",
		'pt-br': "Seismitoad",
		'de-de': "Branawarz"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
		'es-es': "Palpitoad",
		'it-it': "Palpitoad",
		'pt-br': "Palpitoad",
		'de-de': "Mebrana"
	},

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Split Spiral Punch",
				'fr-fr': "Coup d'Poing en Demi Spirale",
				'es-es': "Puño en Espiral Cortante",
				'it-it': "Spiralpugno Squarciante",
				'pt-br': "Soco Espiral Dividido",
				'de-de': "Spiralhieb"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Resonance",
				'fr-fr': "Résonance",
				'es-es': "Resonancia",
				'it-it': "Risonanza",
				'pt-br': "Ressonância",
				'de-de': "Resonanz"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is Confused, this attack does 120 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 120 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 120 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 120 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 120 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 170,
	types: ["Water"],
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "The vibrating of the bumps all over its body causes earthquake-like tremors. Seismitoad and Croagunk are similar species."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457673,
				tcgplayer: 213125
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457673,
				tcgplayer: 213125
			}
		},
	],
}

export default card
