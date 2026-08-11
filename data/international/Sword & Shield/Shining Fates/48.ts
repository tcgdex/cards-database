import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [828],
	set: Set,

	name: {
		'fr-fr': "Roublenard",
		'en-us': "Thievul",
		'es-es': "Thievul",
		'it-it': "Thievul",
		'pt-br': "Thievul",
		'de-de': "Gaunux"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'fr-fr': "Goupilou",
		'en-us': "Nickit"
	},

	attacks: [{
		name: {
			'fr-fr': "Appel à la Rescousse",
			'en-us': "Call for Goons",
			'es-es': "Llamar a los Subordinados",
			'it-it': "Cerca Base",
			'pt-br': "Chamar os Capangas",
			'de-de': "Einsatztruppenruf"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Coinçage",
			'en-us': "Corner",
			'es-es': "Arrinconar",
			'it-it': "Trappola",
			'pt-br': "Quina",
			'de-de': "Bedrängen"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539263,
				tcgplayer: 232522
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539263,
				tcgplayer: 232522
			}
		},
	],
}

export default card
