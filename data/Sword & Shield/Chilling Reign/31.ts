import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Weavile",
		fr: "Dimoret",
		es: "Weavile",
		it: "Weavile",
		pt: "Weavile",
		de: "Snibunna"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret"
	},

	attacks: [{
		name: {
			en: "Two-Hit KO",
			fr: "K.O. Double Frappe",
			es: "Noqueo en Dos Golpes",
			it: "Duecolpi KO",
			pt: "Nocaute Iminente",
			de: "Doppeltreffer-K.-o."
		},

		effect: {
			en: "During your next turn, if the Defending Pokémon is damaged by an attack from a Rapid Strike Pokémon, it will be Knocked Out.",
			fr: "Pendant votre prochain tour, si le Pokémon Défenseur subit les dégâts d’une attaque d’un Pokémon Mille Poings, il sera mis K.O.",
			es: "Durante tu próximo turno, si el Pokémon Defensor resulta dañado por un ataque de un Pokémon Golpe Fluido, quedará Fuera de Combate.",
			it: "Durante il tuo prossimo turno, il Pokémon difensore viene messo KO se viene danneggiato da un attacco di un Pokémon Colpo Rapido.",
			pt: "Durante o seu próximo turno, se o Pokémon Defensor for danificado por um ataque de um Pokémon Golpe Fluido, ele será Nocauteado.",
			de: "Wenn dem Verteidigenden Pokémon während deines nächsten Zuges durch eine Attacke eines Fließender-Angriff-Pokémon Schaden zugefügt wird, wird es kampfunfähig."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Nasty Plot",
			fr: "Machination",
			es: "Maquinación",
			it: "Congiura",
			pt: "Trama Maldosa",
			de: "Ränkeschmied"
		},

		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card