import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		'en-us': "Victini VMAX",
		'fr-fr': "Victini VMAX",
		'es-es': "Victini VMAX",
		'it-it': "Victini VMAX",
		'pt-br': "Victini VMAX",
		'de-de': "Victini VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Fire"],

	attacks: [{
		name: {
			'en-us': "Spreading Flames",
			'fr-fr': "Flammes Rampantes",
			'es-es': "Llamas Dispersas",
			'it-it': "Spargifiamma",
			'pt-br': "Chamas Alastrantes",
			'de-de': "Flammenausbreitung"
		},

		effect: {
			'en-us': "Attach up to 3 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 3 cartes Énergie Fire de votre pile de défausse à vos Pokémon comme il vous plaît.",
			'es-es': "Une hasta 3 cartas de Energía Fire de tu pila de descartes a tus Pokémon de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon fino a tre carte Energia Fire dalla tua pila degli scarti nel modo che preferisci.",
			'pt-br': "Ligue até 3 cartas de Energia Fire da sua pilha de descarte aos seus Pokémon como desejar.",
			'de-de': "Lege bis zu 3 Fire-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Max Victory",
			'fr-fr': "Victoiromax",
			'es-es': "Maxivictoria",
			'it-it': "Dynavittoria",
			'pt-br': "Vitória Max",
			'de-de': "Dyna-Triumph"
		},

		damage: "100+",

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon V, this attack does 120 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,


	stage: "VMAX",
	illustrator: "PLANETA Mochizuki",

	evolveFrom: {
		'en-us': "Victini V",
		'fr-fr': "Victini-V",
		'es-es': "Victini V",
		'it-it': "Victini-V",
		'pt-br': "Victini V",
		'de-de': "Victini-V"
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 546616,
				tcgplayer: 234080
			}
		},
	],
}

export default card
