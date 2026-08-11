import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Hydreigon",
		'fr-fr': "Trioxhydre",
		'es-es': "Hydreigon",
		'it-it': "Hydreigon",
		'pt-br': "Hydreigon",
		'de-de': "Trikephalo"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 150,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dark Trance",
				'fr-fr': "Transe Obscure",
				'es-es': "Trance Siniestro",
				'it-it': "Ipnoscuro",
				'pt-br': "Transe Sombrio",
				'de-de': "Dunkle Dämmerung"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move a Darkness Energy attached to 1 of your Pokémon to another of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Darkness attachée à 1 de vos Pokémon vers un autre de vos Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover una Energía Darkness unida a 1 de tus Pokémon a otro de tus Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi spostare a piacimento una carta Energia Darkness assegnata ai tuoi Pokémon.",
				'pt-br': "Tantas vezes quanto desejar em sua vez de jogar (antes de atacar), você pode mover uma Energia Darkness ligada a 1 dos seus Pokémon para outro dos seus Pokémon.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Darkness-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dragonblast",
				'fr-fr': "Dracoxplosion",
			},
			effect: {
				'en-us': "Discard 2 Darkness Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies Darkness attachées à ce Pokémon.",
			},
			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "This brutal Pokémon travels the skies on its six wings. Anything that moves seems like a foe to it, triggering its attack.",
	},

	thirdParty: {
		cardmarket: 280536,
		tcgplayer: 86241
	}
}

export default card
