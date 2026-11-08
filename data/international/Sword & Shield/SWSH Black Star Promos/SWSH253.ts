import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [484],
	set: Set,

	name: {
		'fr-fr': "Palkia Originel V",
		'de-de': "Ur-Palkia V",
		'es-es': "Palkia Origen V",
		'pt-br': "Palkia Forma Origem V",
		'it-it': "Palkia Originale V",
		'en-us': "Origin Forme Palkia V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Autorité Régionale",
			'de-de': "Herrscher der Region",
			'es-es': "Dominio de la Región",
			'pt-br': "Dominar a Região",
			'it-it': "Governa la Regione",
			'en-us': "Rule the Region"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck une carte Stade, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Stadionkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja 1 carta de Estadio, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por 1 carta de Estádio no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo una carta Stadio, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'en-us': "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'fr-fr': "Hydro-Brèche",
			'de-de': "Hydrobrecher",
			'es-es': "Hidrodescanso",
			'pt-br': "Pausa Aquática",
			'it-it': "Idropausa",
			'en-us': "Hydro Break"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'en-us': "During your next turn, this Pokémon can't attack."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 669480
	}
}

export default card
