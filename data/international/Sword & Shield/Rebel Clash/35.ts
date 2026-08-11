import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [815],

	name: {
		'en-us': "Cinderace V",
		'fr-fr': "Pyrobut V",
		'es-es': "Cinderace V",
		'it-it': "Cinderace V",
		'pt-br': "Cinderace V",
		'de-de': "Liberlo V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Field Runner",
				'fr-fr': "Coureur de Fond",
				'es-es': "",
				'it-it': "",
				'pt-br': "",
				'de-de': ""
			},
			effect: {
				'en-us': "If a Stadium is in play, this Pokémon has no Retreat Cost.",
				'fr-fr': "Si un Stade est en jeu, ce Pokémon n'a pas de Coût de Retraite.",
				'es-es': "Si hay un Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
				'it-it': "Se c'è in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
				'pt-br': "Se um Estádio estiver em jogo, este Pokémon não terá custo de Recuo.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Crimson Legs",
				'fr-fr': "Jambes Carmin",
				'es-es': "Extremidades Carmesís",
				'it-it': "Arti Incandescenti",
				'pt-br': "Pernas Carmesins",
				'de-de': "Rote Beine"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 210,
	types: ["Fire"],
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457633,
				tcgplayer: 213111
			}
		},
	],
}

export default card
