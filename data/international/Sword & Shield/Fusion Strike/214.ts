import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [659],
	set: Set,

	name: {
		'en-us': "Bunnelby",
		'fr-fr': "Sapereau",
		'es-es': "Bunnelby",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
		'de-de': "Scoppel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		'en-us': "It's very sensitive to danger. The sound of Corviknight's flapping will have Bunnelby digging a hole to hide underground in moments."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Find a Friend",
			'fr-fr': "Trouver un Ami",
			'de-de': "Freunde finden",
			'es-es': "Encontrar un Amigo",
			'pt-br': "Encontre um Amigo",
			'it-it': "Trovamico"
		},

		effect: {
			'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por 1 Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Take Down",
			'fr-fr': "Bélier",
			'de-de': "Bodycheck",
			'es-es': "Derribo",
			'pt-br': "Desmantelar",
			'it-it': "Riduttore"
		},

		damage: 30,

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582950,
				tcgplayer: 253312
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582950,
				tcgplayer: 253312
			}
		},
	],
}

export default card
