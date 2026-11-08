import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [102],
	set: Set,

	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Precocious Evolution",
			'fr-fr': "Évolution Précoce",
			'es-es': "Evolución Prematura",
			'it-it': "Evoluzione Precoce",
			'pt-br': "Evolução Prematura",
			'de-de': "Frühentwickler"
		},

		effect: {
			'en-us': "If you go first, you can use this attack during your first turn. Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Cherchez dans votre deck une carte Évolution de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			'es-es': "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'it-it': "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Se você for o primeiro a jogar, poderá usar este ataque durante o seu primeiro turno. Procure por uma carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794256,
				tcgplayer: 589939
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794256,
				tcgplayer: 589939
			}
		},
	],

	illustrator: "Tetsu Kayama",
	
}

export default card
