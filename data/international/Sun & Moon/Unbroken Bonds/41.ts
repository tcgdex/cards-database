import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Tentacruel",
		'fr-fr': "Tentacruel",
		'es-es': "Tentacruel",
		'it-it': "Tentacruel",
		'pt-br': "Tentacruel",
		'de-de': "Tentoxa"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Wicked Tentacles",
				'fr-fr': "Tentacules Malins",
				'es-es': "Tentáculos Malvados",
				'it-it': "Tentacoli Malefici",
				'pt-br': "Tentáculos Traiçoeiros",
				'de-de': "Boshafte Tentakel"
			},
			effect: {
				'en-us': "Move an Energy from 1 of your opponent’s Pokémon to another of their Pokémon. If you do, put 3 damage counters on the Pokémon you moved the Energy to.",
				'fr-fr': "Déplacez une Énergie de l’un des Pokémon de votre adversaire vers un autre de ses Pokémon. Dans ce cas, placez 3 marqueurs de dégâts sur le Pokémon auquel vous avez attaché l’Énergie.",
				'es-es': "Mueve 1 Energía de 1 de los Pokémon de tu rival a otro de sus Pokémon. Si lo haces, pon 3 contadores de daño en el Pokémon al que hayas movido la Energía.",
				'it-it': "Sposta un’Energia da uno dei Pokémon del tuo avversario a un altro dei suoi Pokémon. Se lo fai, metti tre segnalini danno sul Pokémon sul quale hai spostato l’Energia.",
				'pt-br': "Mova 1 Energia de 1 dos Pokémon do seu oponente para outro Pokémon dele(a). Se fizer isto, coloque 3 contadores de dano no Pokémon para o qual você moveu a Energia.",
				'de-de': "Verschiebe 1 Energie von 1 Pokémon deines Gegners auf 1 anderes seiner Pokémon. Wenn du das machst, lege 3 Schadensmarken auf das Pokémon, auf das du die Energie verschoben hast."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wrap",
				'fr-fr': "Ligotage",
				'es-es': "Constricción",
				'it-it': "Avvolgibotta",
				'pt-br': "Embrulho",
				'de-de': "Wickel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 60,

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
		'en-us': "It fires off ultrasonic waves from its red orbs to weaken its prey, and then it wraps them up in its 80 tentacles.",
	},

	thirdParty: {
		cardmarket: 372332,
		tcgplayer: 189120
	}
}

export default card
