import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [484],
	set: Set,

	name: {
		'en-us': "Origin Forme Palkia V",
		'fr-fr': "Palkia Originel V",
		'es-es': "Palkia Origen V",
		'it-it': "Palkia Originale V",
		'pt-br': "Palkia Forma Origem V",
		'de-de': "Ur-Palkia V"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Rule the Region",
			'fr-fr': "Autorité Régionale",
			'es-es': "Dominio de la Región",
			'it-it': "Governa la Regione",
			'pt-br': "Dominar a Região",
			'de-de': "Herrscher der Region"
		},

		effect: {
			'en-us': "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Stade, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Estadio, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Stadio, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta de Estádio no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Stadionkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Hydro Break",
			'fr-fr': "Hydro-Brèche",
			'es-es': "Hidrodescanso",
			'it-it': "Idropausa",
			'pt-br': "Pausa Aquática",
			'de-de': "Hydrobrecher"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
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


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658551,
				tcgplayer: 272239
			}
		},
	],
}

export default card
