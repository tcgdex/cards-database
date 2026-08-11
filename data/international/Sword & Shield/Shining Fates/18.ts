import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [815],
	set: Set,

	name: {
		'fr-fr': "Pyrobut V",
		'en-us': "Cinderace V",
		'es-es': "Cinderace V",
		'it-it': "Cinderace V",
		'pt-br': "Cinderace V",
		'de-de': "Liberlo V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Coureur de Fond",
			'en-us': "Field Runner",
			'es-es': "Corredor de Campo",
			'it-it': "[Ability] Corridore",
			'pt-br': "[Ability] Corredor Campal",
			'de-de': "Feldspieler"
		},

		effect: {
			'fr-fr': "Si un Stade est en jeu, ce Pokémon n'a pas de Coût de Retraite.",
			'en-us': "If a Stadium is in play, this Pokémon has no Retreat Cost.",
			'es-es': "Si hay un Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
			'it-it': "Se c'è in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
			'pt-br': "Se um Estádio estiver em jogo, este Pokémon não terá custo de Recuo.",
			'de-de': "Wenn eine Stadionkarte im Spiel ist, hat dieses Pokémon keine Rückzugskosten."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Jambes Carmin",
			'en-us': "Crimson Legs",
			'es-es': "Extremidades Carmesís",
			'it-it': "Arti Incandescenti",
			'pt-br': "Pernas Carmesins",
			'de-de': "Rote Beine"
		},

		damage: 140,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539113,
				tcgplayer: 232406
			}
		},
	],
}

export default card
