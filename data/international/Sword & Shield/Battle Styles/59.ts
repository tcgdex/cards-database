import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [358],
	set: Set,

	name: {
		'en-us': "Chimecho",
		'fr-fr': "Éoko",
		'es-es': "Chimecho",
		'it-it': "Chimecho",
		'pt-br': "Chimecho",
		'de-de': "Palimpalim"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Minor Errand-Running",
			'fr-fr': "Rendez-Vous Mineur",
			'es-es': "Recado Menor",
			'it-it': "Lavoretto Rapido",
			'pt-br': "Pequena Missão",
			'de-de': "Kleine Besorgung"
		},

		effect: {
			'en-us': "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Pleasant Tone",
			'fr-fr': "Tonalité Plaisante",
			'es-es': "Tono Placentero",
			'it-it': "Motivetto",
			'pt-br': "Tom Agradável",
			'de-de': "Angenehmer Klang"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 20,
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
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Emitting ultrasonic cries, it floats on winds to travel great distances."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545406,
				tcgplayer: 234231
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545406,
				tcgplayer: 234231
			}
		},
	],
}

export default card
