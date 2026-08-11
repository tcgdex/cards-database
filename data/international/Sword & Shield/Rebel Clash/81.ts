import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [769],

	name: {
		'en-us': "Sandygast",
		'fr-fr': "Bacabouh",
		'es-es': "Sandygast",
		'it-it': "Sandygast",
		'pt-br': "Sandygast",
		'de-de': "Sankabuh"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sneaky Placement",
				'fr-fr': "Placement Vicieux",
				'es-es': "Colocación Furtiva",
				'it-it': "Furtivappoggio",
				'pt-br': "Posição Sorrateira",
				'de-de': "Heimlichtuerei"
			},
			effect: {
				'en-us': "Put 1 damage counter on 1 of your opponent's Pokémon.",
				'fr-fr': "Placez un marqueur de dégâts sur l'un des Pokémon de votre adversaire.",
				'es-es': "Pon 1 contador de daño en 1 de los Pokémon de tu rival.",
				'it-it': "Metti un segnalino danno su uno dei Pokémon del tuo avversario.",
				'pt-br': "Coloque 1 contador de dano em 1 dos Pokémon do seu oponente.",
				'de-de': "Lege 1 Schadensmarke auf 1 Pokémon deines Gegners."
			},

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

	retreat: 3,
	hp: 80,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "If you build sand mounds when you're playing, destroy them before you go home, or they may get possessed and become Sandygast."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457823,
				tcgplayer: 213167
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457823,
				tcgplayer: 213167
			}
		},
	],
}

export default card
