import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [839],
	set: Set,

	name: {
		'fr-fr': "Monthracite VMAX",
		'en-us': "Coalossal VMAX",
		'es-es': "Coalossal VMAX",
		'it-it': "Coalossal VMAX",
		'pt-br': "Coalossal VMAX",
		'de-de': "Montecarbo VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	evolveFrom: {
		'fr-fr': "Monthracite-V",
		'en-us': "Coalossal V",
		'es-es': "Coalossal V",
		'it-it': "Coalossal-V",
		'pt-br': "Coalossal V",
		'de-de': "Montecarbo-V"
	},

	attacks: [{
		name: {
			'fr-fr': "Tir Éruptif",
			'en-us': "Eruption Shot",
			'es-es': "Disparo Erupción",
			'it-it': "Colpo Eruzione",
			'pt-br': "Disparo Vulcânico",
			'de-de': "Eruptionsgeschoss"
		},

		effect: {
			'fr-fr': "Défaussez la carte du dessus de votre deck. Si cette carte est une Énergie, cette attaque inflige 90 dégâts supplémentaires et vous attachez cette carte-là à ce Pokémon.",
			'en-us': "Discard the top card of your deck. If that card is an Energy card, this attack does 90 more damage, and attach that card to this Pokémon.",
			'es-es': "Descarta la primera carta de tu baraja. Si es una carta de Energía, este ataque hace 90 puntos de daño más, y unes esa carta a este Pokémon.",
			'it-it': "Scarta la prima carta del tuo mazzo. Se quella carta è una carta Energia, questo attacco infligge 90 danni in più, poi assegnala a questo Pokémon.",
			'pt-br': "Descarte a carta de cima do seu baralho. Se aquela carta for uma carta de Energia, este ataque causará 90 pontos de dano a mais, e ligue aquela carta a este Pokémon.",
			'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Wenn jene Karte eine Energiekarte ist, lege sie an dieses Pokémon an, und diese Attacke fügt 90 Schadenspunkte mehr zu."
		},

		damage: "40+",
		cost: ["Fighting"]
	}, {
		name: {
			'fr-fr': "Rocher G-Max",
			'en-us': "G-Max Boulder",
			'es-es': "Gigarroca",
			'it-it': "Gigamacigno",
			'pt-br': "Rocha G-Max",
			'de-de': "Giga-Felsbrocken"
		},

		damage: 240,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 512655,
				tcgplayer: 226550
			}
		},
	],
}

export default card
