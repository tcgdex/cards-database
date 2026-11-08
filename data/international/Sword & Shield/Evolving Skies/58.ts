import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Dracozolt V",
		'fr-fr': "Galvagon V",
		'es-es': "Dracozolt V",
		'it-it': "Dracozolt V",
		'pt-br': "Dracozolt V",
		'de-de': "Lectragon V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "Ryota Murayama",

	attacks: [{
		name: {
			'en-us': "Primeval Beak",
			'fr-fr': "Bec Primitif",
			'es-es': "Pico Primitivo",
			'it-it': "Becco Primevo",
			'pt-br': "Primeval Beak",
			'de-de': "Urschnabel"
		},

		effect: {
			'en-us': "During your opponent's next turn, Energy cards can't be attached from your opponent's hand to the Defending Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, aucune carte Énergie ne peut être attachée de la main de votre adversaire au Pokémon Défenseur.",
			'es-es': "Durante el próximo turno de tu rival, no se pueden unir cartas de Energía de la mano de tu rival al Pokémon Defensor.",
			'it-it': "Durante il prossimo turno del tuo avversario, nessuna carta Energia può essere assegnata dalla mano del tuo avversario al Pokémon difensore.",
			'pt-br': "During your opponent's next turn, Energy cards can't be attached from your opponent's hand to the Defending Pokémon.",
			'de-de': "Während des nächsten Zuges deines Gegners können keine Energiekarten aus der Hand deines Gegners an das Verteidigende Pokémon angelegt werden."
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Mountain Swing",
			'fr-fr': "Frappe Montagneuse",
			'es-es': "Embestida Montaña",
			'it-it': "Oscillamonte",
			'pt-br': "Mountain Swing",
			'de-de': "Bergschwinger"
		},

		effect: {
			'en-us': "Discard the top 3 cards of your deck.",
			'fr-fr': "Défaussez les 3 cartes du dessus de votre deck.",
			'es-es': "Descarta las 3 primeras cartas de tu baraja.",
			'it-it': "Scarta le prime tre carte del tuo mazzo.",
			'pt-br': "Discard the top 3 cards of your deck.",
			'de-de': "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 180,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	dexId: [880],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574082,
				tcgplayer: 246762
			}
		},
	],
}

export default card
