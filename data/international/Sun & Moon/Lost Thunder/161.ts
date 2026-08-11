import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Kecleon",
		'fr-fr': "Kecleon",
		'es-es': "Kecleon",
		'it-it': "Kecleon",
		'pt-br': "Kecleon",
		'de-de': "Kecleon"
	},

	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		352,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Unit Color 1",
				'fr-fr': "Couleur Unitaire 1",
				'es-es': "Color Unidad 1",
				'it-it': "Unione Colore 1",
				'pt-br': "Cor Unitária 1",
				'de-de': "Aggregat-Farbe 1"
			},
			effect: {
				'en-us': "As long as this Pokémon has Unit Energy GrassFireWater attached to it, it is a Grass, Fire, and Water Pokémon.",
				'fr-fr': "Tant que de l’Énergie Unitaire GrassFireWater est attachée à ce Pokémon, c’est un Pokémon Grass, Fire et Water.",
				'es-es': "Mientras este Pokémon tenga alguna carta de Energía Unidad GrassFireWater unida a él, es un Pokémon Grass, Fire y Water.",
				'it-it': "Fintanto che ha delle carte Energia Unione GrassFireWater assegnate, questo Pokémon è di tipo Grass, Fire e Water.",
				'pt-br': "Enquanto este Pokémon tiver Energia Unitária GrassFireWater ligada a ele, será um Pokémon Grass, Fire e Water.",
				'de-de': "Solang an dieses Pokémon Aggregat-Energie GrassFireWater angelegt ist, ist es ein Grass-, Fire- und Water-Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tongue Smack",
				'fr-fr': "Frappe Langue",
				'es-es': "Lengüetada",
				'it-it': "Slinguazzata",
				'pt-br': "Golpe de Língua",
				'de-de': "Zungenschlag"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is an Evolution Pokémon, this attack does 50 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 50 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 50 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It changes its shading to match its surroundings so it can sneak up on prey. Only its belly patterns stay fixed.",
	},

	thirdParty: {
		cardmarket: 365797,
		tcgplayer: 178984
	}
}

export default card
