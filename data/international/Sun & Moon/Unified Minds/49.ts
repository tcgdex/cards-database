import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Araquanid",
		'fr-fr': "Tarenbulle",
		'es-es': "Araquanid",
		'it-it': "Araquanid",
		'pt-br': "Araquanid",
		'de-de': "Aranestro"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		752,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Dewpider",
		'fr-fr': "Araqua",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tangle Drag",
				'fr-fr': "Lasso Piège",
				'es-es': "Arrastre Enmarañado",
				'it-it': "Trascinavvolgi",
				'pt-br': "Arrastar e Entrelaçar",
				'de-de': "Wirrzieher"
			},
			effect: {
				'en-us': "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				'fr-fr': "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sticky Web",
				'fr-fr': "Toile Gluante",
				'es-es': "Red Viscosa",
				'it-it': "Rete Vischiosa",
				'pt-br': "Teia Pegajosa",
				'de-de': "Klebenetz"
			},
			effect: {
				'en-us': "During your opponent’s next turn, the Defending Pokémon’s attacks cost Colorless more, and its Retreat Cost is Colorless more.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus et son Coût de Retraite augmente de Colorless.",
				'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor cuestan Colorless más, y su Coste de Retirada es de Colorless más.",
				'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore costano Colorless in più e il suo costo di ritirata aumenta di Colorless.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, o custo dos ataques do Pokémon Defensor será Colorless a mais e o seu custo de Recuo será Colorless a mais.",
				'de-de': "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der Attacken des Verteidigenden Pokémon und seine Rückzugskosten um Colorless."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It usually passes its time in the water. When its belly is full, it stores its subdued prey in the water bubble on its head.",
	},

	thirdParty: {
		cardmarket: 388072,
		tcgplayer: 194972
	}
}

export default card
