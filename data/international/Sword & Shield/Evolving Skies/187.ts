import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Lycanroc V",
		'fr-fr': "Lougaroc V",
		'es-es': "Lycanroc V",
		'it-it': "Lycanroc V",
		'pt-br': "Lycanroc V",
		'de-de': "Wolwerock V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],
	stage: "Basic",
	illustrator: "PLANETA Tsuji",

	attacks: [{
		name: {
			'en-us': "Rock Throw",
			'fr-fr': "Jet-Pierres",
			'es-es': "Lanzarrocas",
			'it-it': "Sassata",
			'pt-br': "Rock Throw",
			'de-de': "Steinwurf"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Crashing Fangs",
			'fr-fr': "Crocs Percutants",
			'es-es': "Colmillos Demoledores",
			'it-it': "Schiantazanne",
			'pt-br': "Crashing Fangs",
			'de-de': "Reißende Zähne"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "During your next turn, this Pokémon can't attack.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 200,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	dexId: [745],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574245,
				tcgplayer: 246711
			}
		},
	],
}

export default card
