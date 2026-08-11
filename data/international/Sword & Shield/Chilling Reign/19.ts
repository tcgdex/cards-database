import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [893],
	set: Set,

	name: {
		'en-us': "Zarude",
		'fr-fr': "Zarude",
		'es-es': "Zarude",
		'it-it': "Zarude",
		'pt-br': "Zarude",
		'de-de': "Zarude"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Pack Call",
			'fr-fr': "Chef de Meute",
			'es-es': "Llamar a la Pandilla",
			'it-it': "Cerca Branco",
			'pt-br': "Chamar o Bando",
			'de-de': "Ruf des Rudels"
		},

		effect: {
			'en-us': "Search your deck for a Grass Pokémon, reveal it, and put it into your hand. If you go second and it's your first turn, search for up to 3 Grass Pokémon instead of 1. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon Grass, montrez-le, puis ajoutez-le à votre main. Si vous jouez en second et que c'est votre premier tour, cherchez jusqu'à 3 Pokémon Grass au lieu d'un. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 Pokémon Grass, enséñalo y ponlo en tu mano. Si sales segundo y es tu primer turno, busca hasta 3 Pokémon Grass en vez de 1. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Grass, mostralo e aggiungilo alle carte che hai in mano. Se inizi per secondo ed è il tuo primo turno, cerca fino a tre Pokémon Grass invece di uno. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 Pokémon Grass no seu baralho, revele-o e coloque-o na sua mão. Se você for o segundo a jogar e este for o seu primeiro turno, procure por até 3 Pokémon Grass ao invés de 1. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Grass-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Wenn du als Zweiter am Zug bist und es dein erster Zug ist, durchsuche dein Deck nach bis zu 3 Grass-Pokémon anstelle von 1. Mische anschließend dein Deck."
		},

		cost: ["Grass"]
	}, {
		name: {
			'en-us': "Repeated Whip",
			'fr-fr': "Fouet Répété",
			'es-es': "Latigazo Incesante",
			'it-it': "Frustata Continua",
			'pt-br': "Chicotadas Múltiplas",
			'de-de': "Wiederholtes Peitschen"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each Grass Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Grass attachée à ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Grass unida a este Pokémon.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Grass assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia Grass ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Grass-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Once the vines on Zarude's body tear off, they become nutrients in the soil. This helps the plants of the forest grow."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567099,
				tcgplayer: 241668
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567099,
				tcgplayer: 241668
			}
		},
	],
}

export default card
