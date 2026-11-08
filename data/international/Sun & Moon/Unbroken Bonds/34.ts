import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Wartortle",
		'fr-fr': "Carabaffe",
		'es-es': "Wartortle",
		'it-it': "Wartortle",
		'pt-br': "Wartortle",
		'de-de': "Schillok"
	},

	illustrator: "Hiroki Asanuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		8,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Solid Shell",
				'fr-fr': "Coquille Dure",
				'es-es': "Caparazón Sólido",
				'it-it': "Guscio Solido",
				'pt-br': "Carapaça Sólida",
				'de-de': "Solider Panzer"
			},
			effect: {
				'en-us': "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Aqua Slash",
				'fr-fr': "Aqua Slash",
				'es-es': "Cuchillada Acuática",
				'it-it': "Idrotaglio",
				'pt-br': "Aqua Corte",
				'de-de': "Aquaschlag"
			},
			effect: {
				'en-us': "This Pokémon can’t attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When tapped, this Pokémon will pull in its head, but its tail will still stick out a little bit.",
	},

	thirdParty: {
		cardmarket: 372326,
		tcgplayer: 189094
	}
}

export default card
