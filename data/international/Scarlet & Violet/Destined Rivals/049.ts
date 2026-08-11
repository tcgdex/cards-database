import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		'en-us': "Misty's Gyarados",
		'fr-fr': "Léviator d'Ondine",
		'de-de': "Mistys Garados",
		'it-it': "Gyarados di Misty",
		'es-es': "Gyarados de Misty",
		'pt-br': "Gyarados da Misty",
		'es-mx': "Gyarados de Misty"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Misty's Magikarp",
		'fr-fr': "Magicarpe d'Ondine",
		'de-de': "Mistys Karpador",
		'it-it': "Magikarp di Misty",
		'es-es': "Magikarp de Misty",
		'pt-br': "Magikarp da Misty",
		'es-mx': "Magikarp de Misty"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Splashing Panic",
			'fr-fr': "Panique Éclaboussante",
			'de-de': "Platscherpanik",
			'it-it': "Panico Inondante",
			'es-es': "Salpicadura de Pánico",
			'pt-br': "Borrifando Pânico",
			'es-mx': "Pánico Salpicador"
		},

		effect: {
			'en-us': "Discard the top 7 cards of your deck, and this attack does 70 damage for each Misty's Pokémon that you discarded in this way.",
			'fr-fr': "Défaussez les 7 cartes du dessus de votre deck. Cette attaque inflige 70 dégâts pour chaque Pokémon d'Ondine défaussé de cette façon.",
			'de-de': "Lege die obersten 7 Karten deines Decks auf deinen Ablagestapel, und diese Attacke fügt für jedes Mistys Pokémon, das du auf diese Weise auf deinen Ablagestapel gelegt hast, 70 Schadenspunkte zu.",
			'it-it': "Scarta le prime sette carte del tuo mazzo e questo attacco infligge 70 danni per ogni Pokémon di Misty che hai scartato in questo modo.",
			'es-es': "Descarta las 7 primeras cartas de tu baraja, y este ataque hace 70 puntos de daño por cada Pokémon de Misty que hayas descartado de esta manera.",
			'pt-br': "Descarte as 7 cartas de cima do seu baralho, e este ataque causa 70 pontos de dano para cada Pokémon da Misty descartado desta forma.",
			'es-mx': "Descarta las primeras 7 cartas de tu mazo, y este ataque hace 70 puntos de daño por cada Pokémon de Misty que descartaste de esta manera."
		},

		damage: "70×"
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Waterfall",
			'fr-fr': "Cascade",
			'de-de': "Kaskade",
			'it-it': "Cascata",
			'es-es': "Cascada",
			'pt-br': "Cachoeira",
			'es-mx': "Cascada"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825923,
				tcgplayer: 630816
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825923,
				tcgplayer: 630816
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 826180,
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 828101,
			}
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 833945,
			}
		},
	],
}

export default card
