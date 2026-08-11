import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		'en-us': "Lycanroc",
		'fr-fr': "Lougaroc",
		'es-es': "Lycanroc",
		'it-it': "Lycanroc",
		'pt-br': "Lycanroc",
		'de-de': "Wolwerock"
	},

	illustrator: "Teeziro",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'de-de': "Wuffels"
	},

	attacks: [{
		name: {
			'en-us': "Rogue Fangs",
			'fr-fr': "Crocs Fougueux",
			'es-es': "Colmillos Malvados",
			'it-it': "Zanne Ferali",
			'pt-br': "Presas Trapaceiras",
			'de-de': "Schurkische Fänge"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each Single Strike Pokémon in your discard pile.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon Poing Final dans votre pile de défausse.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada Pokémon Golpe Brusco en tu pila de descartes.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni Pokémon Colpo Singolo nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada Pokémon Golpe Decisivo na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jedes Fokussierter-Angriff-Pokémon in deinem Ablagestapel 10 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "They live alone without forming packs. They will only listen to orders from Trainers who can draw out their true power."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567195,
				tcgplayer: 241754
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567195,
				tcgplayer: 241754
			}
		},
	],
}

export default card
