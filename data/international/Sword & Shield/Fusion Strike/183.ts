import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [530],
	set: Set,

	name: {
		'en-us': "Excadrill",
		'fr-fr': "Minotaupe",
		'es-es': "Excadrill",
		'it-it': "Excadrill",
		'pt-br': "Excadrill",
		'de-de': "Stalobor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Lee HyunJung",

	description: {
		'en-us': "Known as the Drill King, this Pokémon can tunnel through the terrain at speeds of over 90 mph."
	},

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Metal Claw",
			'fr-fr': "Griffe Acier",
			'de-de': "Metallklaue",
			'es-es': "Garra Metal",
			'pt-br': "Garra de Metal",
			'it-it': "Ferrartigli"
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Rock Tomb",
			'fr-fr': "Tomberoche",
			'de-de': "Felsgrab",
			'es-es': "Tumba Rocas",
			'pt-br': "Tumba de Rochas",
			'it-it': "Rocciotomba"
		},

		damage: 120,

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582811,
				tcgplayer: 253331
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582811,
				tcgplayer: 253331
			}
		},
	],
}

export default card
