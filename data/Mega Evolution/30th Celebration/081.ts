import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It wanders around, carrying an old coin on its back. It survives by draining the life-force from humans who try to pick up its coin."
	},

	name: {
		en: "Gimmighoul",
		fr: "Mordudor",
		de: "Gierspenst",
		es: "Gimmighoul",
		it: "Gimmighoul",
		'es-mx': "Gimmighoul",
		pt: "Gimmighoul"
	},

	illustrator: "Fujimoto Gold",
	rarity: "Common",
	category: "Pokemon",
	dexId: [999],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Strolls So Much",
			fr: "Promenades à Gogo",
			de: "Spaziergier",
			es: "Caminata",
			it: "In Lungo e in Largo",
			'es-mx': "Larga Caminata",
			pt: "Bater Perna"
		},

		effect: {
			en: "Flip a coin. If heads, search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia il tuo mazzo.",
			'es-mx': "Lanza 1 moneda. Si sale cara, busca en tu mazo 1 carta y ponla en tu mano. Después, baraja tu mazo.",
			pt: "Jogue uma moeda. Se sair cara, procure por uma carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907688,
				tcgplayer: 716477
			}
		}
	],
}

export default card
