import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cinderace V",
		'fr-fr': "Pyrobut V",
		'es-es': "Cinderace V",
		'it-it': "Cinderace V",
		'pt-br': "Cinderace V",
		'de-de': "Liberlo V"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Field Runner",
			'fr-fr': "Coureur de Fond",
			'es-es': "Corredor de Campo",
			'it-it': "Corridore",
			'pt-br': "Corredor Campal",
			'de-de': "Feldspieler"
		},

		effect: {
			'en-us': "If a Stadium is in play, this Pokémon has no Retreat Cost.",
			'fr-fr': "Si un Stade est en jeu, ce Pokémon n'a pas de Coût de Retraite.",
			'es-es': "Si hay un Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
			'it-it': "Se c'è in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
			'pt-br': "Se um Estádio estiver em jogo, este Pokémon não terá custo de Recuo.",
			'de-de': "Wenn eine Stadionkarte im Spiel ist, hat dieses Pokémon keine Rückzugskosten."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Crimson Legs",
			'fr-fr': "Jambes Carmin",
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
	stage: "Basic",
	dexId: [815],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 450578
	}
}

export default card
