import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [823],
	set: Set,

	name: {
		'en-us': "Corviknight V",
		'fr-fr': "Corvaillus V",
		'es-es': "Corviknight V",
		'it-it': "Corviknight V",
		'pt-br': "Corviknight V",
		'de-de': "Krarmor V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],

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

		damage: 30,
		cost: ["Metal"]
	}, {
		name: {
			'en-us': "Sky Hurricane",
			'fr-fr': "Vent Violent Céleste",
			'es-es': "Vendaval de los Cielos",
			'it-it': "Tifone Aereo",
			'pt-br': "Furacão Aéreo",
			'de-de': "Himmelssturm"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Sky Hurricane.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Vent Violent Céleste.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Vendaval de los Cielos.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Tifone Aereo.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Furacão Aéreo.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Himmelssturm nicht einsetzen."
		},

		damage: 190,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 546456,
				tcgplayer: 234062
			}
		},
	],
}

export default card
