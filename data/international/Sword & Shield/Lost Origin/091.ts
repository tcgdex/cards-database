import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [464],
	set: Set,

	name: {
		'en-us': "Rhyperior",
		'fr-fr': "Rhinastoc",
		'es-es': "Rhyperior",
		'it-it': "Rhyperior",
		'pt-br': "Rhyperior",
		'de-de': "Rihornior"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Rhydon",
		'fr-fr': "Rhinoféros",
		'es-es': "Rhydon",
		'it-it': "Rhydon",
		'pt-br': "Rhydon",
		'de-de': "Rizeros"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Geo Cannon",
			'fr-fr': "Géo-Canon",
			'es-es': "Geocañón",
			'it-it': "Geocannone",
			'pt-br': "Geocanhão",
			'de-de': "Geo-Kanone"
		},

		effect: {
			'en-us': "Discard the top card of your deck. If that card is an Energy card, this attack does 100 more damage, and attach that card to this Pokémon.",
			'fr-fr': "Défaussez la carte du dessus de votre deck. Si cette carte est une carte Énergie, cette attaque inflige 100 dégâts supplémentaires et vous attachez cette carte-là à ce Pokémon.",
			'es-es': "Descarta la primera carta de tu baraja. Si es una carta de Energía, este ataque hace 100 puntos de daño más, y unes esa carta a este Pokémon.",
			'it-it': "Scarta la prima carta del tuo mazzo. Se quella carta è una carta Energia, questo attacco infligge 100 danni in più, poi assegnala a questo Pokémon.",
			'pt-br': "Descarte a carta de cima do seu baralho. Se aquela carta for uma carta de Energia, este ataque causará 100 pontos de dano a mais, e ligue aquela carta a este Pokémon.",
			'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Wenn jene Karte eine Energiekarte ist, fügt diese Attacke 100 Schadenspunkte mehr zu, und du legst jene Karte an dieses Pokémon an."
		},

		damage: "50+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Rocky Tackle",
			'fr-fr': "Tacle Rocailleux",
			'es-es': "Placaje Rocoso",
			'it-it': "Azione Rocciosa",
			'pt-br': "Investida Pedregosa",
			'de-de': "Steiniger Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 180
	}],

	retreat: 4,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674104,
				tcgplayer: 283979
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674104,
				tcgplayer: 283979
			}
		},
	],
}

export default card
