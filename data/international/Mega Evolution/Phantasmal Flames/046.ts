import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bramblin",
		'fr-fr': "Virovent",
		'es-es': "Bramblin",
		'es-mx': "Bramblin",
		'de-de': "Weherba",
		'it-it': "Bramblin",
		'pt-br': "Bramblin"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [946],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Sneaky Placement",
			'fr-fr': "Placement Vicieux",
			'es-es': "Colocación Furtiva",
			'es-mx': "Distribución Furtiva",
			'de-de': "Heimlichtuerei",
			'it-it': "Furtivappoggio",
			'pt-br': "Posição Sorrateira"
		},

		effect: {
			'en-us': "Place 1 damage counter on 1 of your opponent's Pokémon.",
			'fr-fr': "Placez un marqueur de dégâts sur l'un des Pokémon de votre adversaire.",
			'es-es': "Pon 1 contador de daño en uno de los Pokémon de tu rival.",
			'es-mx': "Pon 1 contador de daño en 1 de los Pokémon de tu rival.",
			'de-de': "Lege 1 Schadensmarke auf 1 Pokémon deines Gegners.",
			'it-it': "Metti un segnalino danno su uno dei Pokémon del tuo avversario.",
			'pt-br': "Coloque 1 contador de dano em 1 dos Pokémon do seu oponente."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "A soul unable to move on to the afterlife was blown around by the wind until it got tangled up with dried grass and became a Pokémon.",
	},

	illustrator: "Takeshi Nakamura",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857621,
				tcgplayer: 662136,
				cardtrader: 356829
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857621,
				tcgplayer: 662136,
				cardtrader: 356829
			}
		},
	],
}

export default card
