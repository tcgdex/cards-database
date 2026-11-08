import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
		'es-es': "Sableye",
		'it-it': "Sableye",
		'pt-br': "Sableye",
		'de-de': "Zobiris"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Eri Yamaki",

	attacks: [{
		name: {
			'en-us': "Go and Collect",
			'fr-fr': "Aller Chercher",
			'es-es': "Ve y Recoge",
			'it-it': "Far Raccolta",
			'pt-br': "Go and Collect",
			'de-de': "Fliegen und Sammeln"
		},

		effect: {
			'en-us': "Search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Dresseur, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Entrenador, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Allenatore, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'de-de': "Durchsuche dein Deck nach 1 Trainerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Corner",
			'fr-fr': "Coinçage",
			'es-es': "Arrinconar",
			'it-it': "Trappola",
			'pt-br': "Corner",
			'de-de': "Bedrängen"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 40,
		cost: ["Psychic", "Colorless"]
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

	description: {
		'en-us': "It feeds on gemstone crystals. In darkness, its eyes sparkle with the glitter of jewels."
	},

	dexId: [302],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574115,
				tcgplayer: 246842
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574115,
				tcgplayer: 246842
			}
		},
	],
}

export default card
