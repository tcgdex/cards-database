import { Card } from "models/database/card"
import Set from "../Silver Tempest"

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

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Dreaming Tone",
			'fr-fr': "Mélodie Rêveuse",
			'es-es': "Tono Ensueño",
			'it-it': "Tono Onirico",
			'pt-br': "Tom Sonhador",
			'de-de': "Verträumter Klang"
		},

		effect: {
			'en-us': "During your opponent's next turn, if an Energy card is attached to the Defending Pokémon from your opponent's hand, that Pokémon will be Asleep.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si une carte Énergie est attachée au Pokémon Défenseur depuis la main de votre adversaire, ce Pokémon-là sera Endormi.",
			'es-es': "Durante el próximo turno de tu rival, si se une 1 carta de Energía de la mano de tu rival al Pokémon Defensor, ese Pokémon pasa a estar Dormido.",
			'it-it': "Durante il prossimo turno del tuo avversario, se una carta Energia viene assegnata al Pokémon difensore dalla mano del tuo avversario, quel Pokémon verrà addormentato.",
			'pt-br': "Durante o próximo turno do seu oponente, se 1 carta de Energia da mão do seu oponente for ligada ao Pokémon Defensor, aquele Pokémon ficará Adormecido.",
			'de-de': "Wenn während des nächsten Zuges deines Gegners 1 Energiekarte aus der Hand deines Gegners an das Verteidigende Pokémon angelegt wird, schläft jenes Pokémon."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Hang Down",
			'fr-fr': "Suspension",
			'es-es': "Prender",
			'it-it': "Tirar Giù",
			'pt-br': "Dependurar",
			'de-de': "Herunterhängen"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Emitting ultrasonic cries, it floats on winds to travel great distances.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682121,
				tcgplayer: 451728
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682121,
				tcgplayer: 451728
			}
		},
	],
}

export default card
