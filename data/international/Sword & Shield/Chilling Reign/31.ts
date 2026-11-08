import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [461],
	set: Set,

	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret",
		'es-es': "Weavile",
		'it-it': "Weavile",
		'pt-br': "Weavile",
		'de-de': "Snibunna"
	},

	illustrator: "Taira Akitsu",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
		'de-de': "Sniebel"
	},

	attacks: [{
		name: {
			'en-us': "Two-Hit KO",
			'fr-fr': "K.O. Double Frappe",
			'es-es': "Noqueo en Dos Golpes",
			'it-it': "Duecolpi KO",
			'pt-br': "Nocaute Iminente",
			'de-de': "Doppeltreffer-K.-o."
		},

		effect: {
			'en-us': "During your next turn, if the Defending Pokémon is damaged by an attack from a Rapid Strike Pokémon, it will be Knocked Out.",
			'fr-fr': "Pendant votre prochain tour, si le Pokémon Défenseur subit les dégâts d'une attaque d'un Pokémon Mille Poings, il sera mis K.O.",
			'es-es': "Durante tu próximo turno, si el Pokémon Defensor resulta dañado por un ataque de un Pokémon Golpe Fluido, quedará Fuera de Combate.",
			'it-it': "Durante il tuo prossimo turno, il Pokémon difensore viene messo KO se viene danneggiato da un attacco di un Pokémon Colpo Rapido.",
			'pt-br': "Durante o seu próximo turno, se o Pokémon Defensor for danificado por um ataque de um Pokémon Golpe Fluido, ele será Nocauteado.",
			'de-de': "Wenn dem Verteidigenden Pokémon während deines nächsten Zuges durch eine Attacke eines Fließender-Angriff-Pokémon Schaden zugefügt wird, wird es kampfunfähig."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Nasty Plot",
			'fr-fr': "Machination",
			'es-es': "Maquinación",
			'it-it': "Congiura",
			'pt-br': "Trama Maldosa",
			'de-de': "Ränkeschmied"
		},

		effect: {
			'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "With its claws, it leaves behind signs for its friends to find. The number of distinct signs is said to be over 500."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567111,
				tcgplayer: 241684
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567111,
				tcgplayer: 241684
			}
		},
	],
}

export default card
