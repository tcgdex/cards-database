import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [832],
	set: Set,

	name: {
		'fr-fr': "Moumouflon",
		'en-us': "Dubwool",
		'es-es': "Dubwool",
		'it-it': "Dubwool",
		'pt-br': "Dubwool",
		'de-de': "Zwollock"
	},

	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		'fr-fr': "Moumouton",
		'en-us': "Wooloo"
	},

	attacks: [{
		name: {
			'fr-fr': "Cotogarde",
			'en-us': "Cotton Guard",
			'es-es': "Rizo Algodón",
			'it-it': "Cotonscudo",
			'pt-br': "Proteção de Algodão",
			'de-de': "Watteschild"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Damoclès",
			'en-us': "Double-Edge",
			'es-es': "Doble Filo",
			'it-it': "Sdoppiatore",
			'pt-br': "Faca de Dois Gumes",
			'de-de': "Risikotackle"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'en-us': "This Pokémon also does 30 damage to itself.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "Its majestic horns are meant only to impress the opposite gender. They never see use in battle."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539908,
				tcgplayer: 232493
			}
		},
	],
}

export default card
