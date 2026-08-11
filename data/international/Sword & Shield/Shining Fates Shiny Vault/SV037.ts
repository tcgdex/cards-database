import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [883],
	set: Set,

	name: {
		'fr-fr': "Hydragla",
		'en-us': "Arctovish",
		'es-es': "Arctovish",
		'it-it': "Arctovish",
		'pt-br': "Arctovish",
		'de-de': "Pescryodon"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Fossile Rare",
		'en-us': "Rare Fossil"
	},

	attacks: [{
		name: {
			'fr-fr': "Visage Dur",
			'en-us': "Hard Face",
			'es-es': "Cara Resistente",
			'it-it': "Musoduro",
			'pt-br': "Cara Dura",
			'de-de': "Harte Oberfläche"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 60 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "During your opponent's next turn, this Pokémon takes 60 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 60 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 60 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 60 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 90,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'fr-fr': "Souffle Froid",
			'en-us': "Cold Breath",
			'es-es': "Aliento Frío",
			'it-it': "Alito Ibernante",
			'pt-br': "Respiração Fria",
			'de-de': "Eisiger Atem"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 130,
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "Though it's able to capture prey by freezing its surroundings, it has trouble eating the prey afterward because its mouth is on top of its head."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539573,
				tcgplayer: 232521
			}
		},
	],
}

export default card
