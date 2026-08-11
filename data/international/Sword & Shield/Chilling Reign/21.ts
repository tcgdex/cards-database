import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [257],
	set: Set,

	name: {
		'en-us': "Blaziken VMAX",
		'fr-fr': "Braségali VMAX",
		'es-es': "Blaziken VMAX",
		'it-it': "Blaziken VMAX",
		'pt-br': "Blaziken VMAX",
		'de-de': "Lohgock VMAX"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Blaziken V",
		'fr-fr': "Braségali-V",
		'es-es': "Blaziken V",
		'it-it': "Blaziken-V",
		'pt-br': "Blaziken V",
		'de-de': "Lohgock-V"
	},

	attacks: [{
		name: {
			'en-us': "Clutch",
			'fr-fr': "Serre",
			'es-es': "Embrague",
			'it-it': "Grinfie",
			'pt-br': "Agarramento",
			'de-de': "Greifer"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 60,
		cost: ["Fire"]
	}, {
		name: {
			'en-us': "Max Blaze",
			'fr-fr': "Brasiomax",
			'es-es': "Maxillamas",
			'it-it': "Dynavampata",
			'pt-br': "Incêndio Max",
			'de-de': "Dyna-Großbrand"
		},

		effect: {
			'en-us': "Choose up to 2 of your Benched Rapid Strike Pokémon and attach an Energy card from your discard pile to each of them.",
			'fr-fr': "Choisissez jusqu'à 2 de vos Pokémon Mille Poings de Banc, puis attachez une carte Énergie de votre pile de défausse à chacun d'eux.",
			'es-es': "Elige hasta 2 de tus Pokémon Golpe Fluido en Banca y une 1 carta de Energía de tu pila de descartes a cada uno de ellos.",
			'it-it': "Scegli fino a due dei tuoi Pokémon Colpo Rapido in panchina e assegna a ognuno di essi una carta Energia dalla tua pila degli scarti.",
			'pt-br': "Escolha até 2 dos seus Pokémon Golpe Fluido no Banco e ligue 1 carta de Energia da sua pilha de descarte a cada um deles.",
			'de-de': "Wähle bis zu 2 Fließender-Angriff-Pokémon auf deiner Bank und lege 1 Energiekarte aus deinem Ablagestapel an jedes von ihnen an."
		},

		damage: 130,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567101,
				tcgplayer: 241671
			}
		},
	],
}

export default card
