import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'fr-fr': "Évoli",
		'en-us': "Eevee",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Amis en Couleurs",
			'en-us': "Colorful Friends",
			'es-es': "Amigos Coloridos",
			'it-it': "Amici Colorati",
			'pt-br': "Amigos Multicoloridos",
			'de-de': "Bunte Freunde"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon de types différents, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 3 Pokémon of different types, reveal them, and put them into your hand. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon de diferentes tipos, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon di tipo diverso, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 Pokémon de tipos diferentes no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Pokémon verschiedenen Typs, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'fr-fr': "Sautiller",
			'en-us': "Skip",
			'es-es': "Saltito",
			'it-it': "Saltello",
			'pt-br': "Saltitar",
			'de-de': "Hüpfer"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733728,
				tcgplayer: 516696,
				cardtrader: 261112
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733728,
				tcgplayer: 516696,
				cardtrader: 261112
			}
		},
		{
			type: 'normal',
			stamp: ['pokemon-together'],
			thirdParty: {
				cardmarket: 748475
			}
		},
		{
			type: 'normal',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 845405
			}
		},
	],

	illustrator: "Narumi Sato",

	
}

export default card
