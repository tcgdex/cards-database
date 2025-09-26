import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Delibird",
		fr: "Cadoizo",
		de: "Botogel",
		it: "Delibird",
		es: "Delibird",
		pt: "Delibird",
		'es-mx': "Delibird"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Quick Gift",
			fr: "Cadeau Rapide",
			de: "Schnelles Geschenk",
			it: "Regalo Rapido",
			es: "Regalo Rápido",
			pt: "Presente Rápido",
			'es-mx': "Regalo Rápido"
		},

		effect: {
			en: "If you go first, you can use this attack during your first turn. Search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			de: "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia il tuo mazzo.",
			es: "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Se você for o primeiro a jogar, poderá usar este ataque durante o seu primeiro turno. Procure por uma carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Busca en tu mazo 1 carta y ponla en tu mano. Después, baraja tu mazo."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			de: "Sanfter Hieb",
			it: "Schiaffetto",
			es: "Bofetada Gentil",
			pt: "Tapinha",
			'es-mx': "Cachetadita"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654444
	}
}

export default card