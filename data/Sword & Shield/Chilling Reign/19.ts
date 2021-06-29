import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Zarude",
		fr: "Zarude",
		es: "Zarude",
		it: "Zarude",
		pt: "Zarude",
		de: "Zarude"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Pack Call",
			fr: "Chef de Meute",
			es: "Llamar a la Pandilla",
			it: "Cerca Branco",
			pt: "Chamar o Bando",
			de: "Ruf des Rudels"
		},

		effect: {
			en: "Search your deck for a Grass Pokémon, reveal it, and put it into your hand. If you go second and it’s your first turn, search for up to 3 Grass Pokémon instead of 1. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Pokémon Grass, montrez-le, puis ajoutez-le à votre main. Si vous jouez en second et que c’est votre premier tour, cherchez jusqu’à 3 Pokémon Grass au lieu d’un. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 Pokémon Grass, enséñalo y ponlo en tu mano. Si sales segundo y es tu primer turno, busca hasta 3 Pokémon Grass en vez de 1. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un Pokémon Grass, mostralo e aggiungilo alle carte che hai in mano. Se inizi per secondo ed è il tuo primo turno, cerca fino a tre Pokémon Grass invece di uno. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 Pokémon Grass no seu baralho, revele-o e coloque-o na sua mão. Se você for o segundo a jogar e este for o seu primeiro turno, procure por até 3 Pokémon Grass ao invés de 1. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Grass-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Wenn du als Zweiter am Zug bist und es dein erster Zug ist, durchsuche dein Deck nach bis zu 3 Grass-Pokémon anstelle von 1. Mische anschließend dein Deck."
		},

		cost: ["Grass"]
	}, {
		name: {
			en: "Repeated Whip",
			fr: "Fouet Répété",
			es: "Latigazo Incesante",
			it: "Frustata Continua",
			pt: "Chicotadas Múltiplas",
			de: "Wiederholtes Peitschen"
		},

		effect: {
			en: "This attack does 20 more damage for each Grass Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Grass attachée à ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía Grass unida a este Pokémon.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia Grass assegnata a questo Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia Grass ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Grass-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card