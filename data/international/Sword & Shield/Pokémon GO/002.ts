import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [2],
	set: Set,

	name: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre",
		'es-es': "Ivysaur",
		'it-it': "Ivysaur",
		'pt-br': "Ivysaur",
		'de-de': "Bisaknosp"
	},

	illustrator: "zig",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre",
		'es-es': "Bulbasaur",
		'it-it': "Bulbasaur",
		'pt-br': "Bulbasaur",
		'de-de': "Bisasam"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Summoning Aroma",
			'fr-fr': "Arôme Invocatoire",
			'es-es': "Aroma Invocador",
			'it-it': "Aroma Evocativo",
			'pt-br': "Aroma Convocador",
			'de-de': "Verlockendes Aroma"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'es-es': "Hoja Afilada",
			'it-it': "Foglielama",
			'pt-br': "Folha Navalha",
			'de-de': "Rasierblatt"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665236,
				tcgplayer: 274434
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665236,
				tcgplayer: 274434
			}
		},
	],
}

export default card
