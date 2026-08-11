import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [466],
	set: Set,

	name: {
		'en-us': "Electivire",
		'fr-fr': "Élekable",
		'es-es': "Electivire",
		'it-it': "Electivire",
		'pt-br': "Electivire",
		'de-de': "Elevoltek"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},

	attacks: [{
		name: {
			'en-us': "Tumbling Attack",
			'fr-fr': "Attaque Trébuchante",
			'es-es': "Ataque Tambaleante",
			'it-it': "Attacco Capriola",
			'pt-br': "Ataque Cambalhota",
			'de-de': "Taumler"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Lightning Slam",
			'fr-fr': "Tacle Foudroyant",
			'es-es': "Golpe Rayo",
			'it-it': "Fulmischianto",
			'pt-br': "Pancada de Raios",
			'de-de': "Wuchtiger Einschlag"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Lightning Slam.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Tacle Foudroyant.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Rayo.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Fulmischianto.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Pancada de Raios.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Wuchtiger Einschlag nicht einsetzen."
		},

		damage: 180,
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "A single Electivire can provide enough electricity for all the buildings in a big city for a year."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545336,
				tcgplayer: 234195
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545336,
				tcgplayer: 234195
			}
		},
	],
}

export default card
