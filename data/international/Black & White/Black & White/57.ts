import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Reuniclus",
		'fr-fr': "Symbios",
		'es-es': "Reuniclus",
		'it-it': "Reuniclus",
		'pt-br': "Reuniclus",
		'de-de': "Zytomega"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		579,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Duosion",
		'fr-fr': "Méios",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Damage Swap",
				'fr-fr': "Échange de Dégâts",
				'es-es': "Intercambio de Daño",
				'it-it': "Dannoscambio",
				'pt-br': "Troca de Danos",
				'de-de': "Schadenstausch"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts d’un de vos Pokémon vers un autre de vos Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 contador de daño de 1 de tus Pokémon a otro de tus Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi distribuire a piacimento i segnalini danno presenti sui tuoi Pokémon.",
				'pt-br': "Sempre que desejar, na sua vez de jogar (antes de atacar), você poderá mover 1 marcador de dano de 1 dos seus Pokémon para outro dos seus Pokémon.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von 1 deiner Pokémon auf ein anderes deiner Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Psywave",
				'fr-fr': "Vague Psy",
			},
			effect: {
				'en-us': "Does 10 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "These remarkably intelligent Pokémon fight by controlling arms that can grip with rock-crushing power.",
	},

	thirdParty: {
		cardmarket: 279795,
		tcgplayer: 88719
	}
}

export default card
