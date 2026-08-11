import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Seismitoad",
		'fr-fr': "Crapustule",
		'es-es': "Seismitoad",
		'it-it': "Seismitoad",
		'pt-br': "Seismitoad",
		'de-de': "Branawarz"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],
	stage: "Stage2",
	illustrator: "Pani Kobayashi",

	attacks: [{
		name: {
			'en-us': "Shaky Wave",
			'fr-fr': "Onde Tremblante",
			'es-es': "Onda Tambaleante",
			'it-it': "Onda Tremula",
			'pt-br': "Shaky Wave",
			'de-de': "Wankender Boden"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more, and its Retreat Cost is Colorless more.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus et son Coût de Retraite augmente de Colorless.",
			'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor cuestan Colorless más, y su Coste de Retirada es de Colorless más.",
			'it-it': "Durante il prossimo turno del tuo avversario, il costo degli attacchi del Pokémon difensore aumenta di Colorless e il suo costo di ritirata aumenta di Colorless.",
			'pt-br': "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more, and its Retreat Cost is Colorless more.",
			'de-de': "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der Attacken des Verteidigenden Pokémon um Colorless, und seine Rückzugskosten erhöhen sich um Colorless."
		},

		damage: 60,
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Hyper Voice",
			'fr-fr': "Mégaphone",
			'es-es': "Vozarrón",
			'it-it': "Granvoce",
			'pt-br': "Hyper Voice",
			'de-de': "Schallwelle"
		},

		damage: 160,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,

	evolveFrom: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
		'es-es': "Palpitoad",
		'it-it': "Palpitoad",
		'pt-br': "Palpitoad",
		'de-de': "Mebrana"
	},

	description: {
		'en-us': "This Pokémon is popular among the elderly, who say the vibrations of its lumps are great for massages."
	},

	dexId: [537],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574138,
				tcgplayer: 246892
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574138,
				tcgplayer: 246892
			}
		},
	],
}

export default card
