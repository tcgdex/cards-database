import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [131],
	set: Set,

	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'pt-br': "Lapras",
		'de-de': "Lapras"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Wintry Call",
			'fr-fr': "Appel Hivernal",
			'es-es': "Llamada Invernal",
			'it-it': "Gelochiamata",
			'pt-br': "Chamado Invernal",
			'de-de': "Winterlicher Ruf"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Melony cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Lona, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Mel, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Melania, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas Melony no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Mel-Karten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Icy Wind",
			'fr-fr': "Vent Glace",
			'es-es': "Viento Hielo",
			'it-it': "Ventogelato",
			'pt-br': "Vento Congelante",
			'de-de': "Eissturm"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Crossing icy seas is no issue for this cold-resistant Pokémon. Its smooth skin is a little cool to the touch."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567109,
				tcgplayer: 241682
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567109,
				tcgplayer: 241682
			}
		},
	],
}

export default card
