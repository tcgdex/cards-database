import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Coalossal VMAX",
		'fr-fr': "Monthracite VMAX",
		'es-es': "Coalossal VMAX",
		'it-it': "Coalossal VMAX",
		'pt-br': "Coalossal VMAX",
		'de-de': "Montecarbo VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	dexId: [839],
	set: Set,
	hp: 330,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Coalossal V",
		'fr-fr': "Monthracite-V",
		'es-es': "Coalossal V",
		'it-it': "Coalossal-V",
		'pt-br': "Coalossal V",
		'de-de': "Montecarbo-V"
	},

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Eruption Shot",
				'fr-fr': "Tir Éruptif",
				'es-es': "Disparo Erupción",
				'it-it': "Colpo Eruzione",
				'pt-br': "Disparo Vulcânico",
				'de-de': "Eruptionsgeschoss"
			},
			effect: {
				'en-us': "Discard the top card of your deck. If that card is an Energy card, this attack does 90 more damage, and attach that card to this Pokémon.",
				'fr-fr': "Défaussez la carte du dessus de votre deck. Si cette carte est une Énergie, cette attaque inflige 90 dégâts supplémentaires et vous attachez cette carte-là à ce Pokémon.",
				'es-es': "Descarta la primera carta de tu baraja. Si es una carta de Energía, este ataque hace 90 puntos de daño más, y unes esa carta a este Pokémon.",
				'it-it': "Scarta la prima carta del tuo mazzo. Se quella carta è una carta Energia, questo attacco infligge 90 danni in più, poi assegnala a questo Pokémon.",
				'pt-br': "Descarte a carta de cima do seu baralho. Se aquela carta for uma carta de Energia, este ataque causará 90 pontos de dano a mais, e ligue aquela carta a este Pokémon.",
				'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Wenn jene Karte eine Energiekarte ist, lege sie an dieses Pokémon an, und diese Attacke fügt 90 Schadenspunkte mehr zu."
			},
			damage: "40+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "G-Max Boulder",
				'fr-fr': "Rocher G-Max",
				'es-es': "Gigarroca",
				'it-it': "Gigamacigno",
				'pt-br': "Rocha G-Max",
				'de-de': "Giga-Felsbrocken"
			},

			damage: 240,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511915,
				tcgplayer: 226551
			}
		},
	],
}

export default card
