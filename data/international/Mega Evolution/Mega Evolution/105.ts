import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Delibird",
		'fr-fr': "Cadoizo",
		'de-de': "Botogel",
		'it-it': "Delibird",
		'es-es': "Delibird",
		'pt-br': "Delibird",
		'es-mx': "Delibird"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [225],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Quick Gift",
			'fr-fr': "Cadeau Rapide",
			'de-de': "Schnelles Geschenk",
			'it-it': "Regalo Rapido",
			'es-es': "Regalo Rápido",
			'pt-br': "Presente Rápido",
			'es-mx': "Regalo Rápido"
		},

		effect: {
			'en-us': "If you go first, you can use this attack during your first turn. Search your deck for a card and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'de-de': "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia il tuo mazzo.",
			'es-es': "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Se você for o primeiro a jogar, poderá usar este ataque durante o seu primeiro turno. Procure por uma carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Busca en tu mazo 1 carta y ponla en tu mano. Después, baraja tu mazo."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'de-de': "Sanfter Hieb",
			'it-it': "Schiaffetto",
			'es-es': "Bofetada Gentil",
			'pt-br': "Tapinha",
			'es-mx': "Cachetadita"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851176,
				tcgplayer: 654444
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851176,
				tcgplayer: 654444
			}
		},
	],
}

export default card
