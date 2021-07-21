import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
		es: "Tentacruel",
		it: "Tentacruel",
		pt: "Tentacruel",
		de: "Tentoxa"
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
		en: "Tentacool",
		fr: "Tentacool",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wicked Tentacles",
				fr: "Tentacules Malins",
				es: "Tentáculos Malvados",
				it: "Tentacoli Malefici",
				pt: "Tentáculos Traiçoeiros",
				de: "Boshafte Tentakel"
			},
			effect: {
				en: "Move an Energy from 1 of your opponent’s Pokémon to another of their Pokémon. If you do, put 3 damage counters on the Pokémon you moved the Energy to.",
				fr: "Déplacez une Énergie de l’un des Pokémon de votre adversaire vers un autre de ses Pokémon. Dans ce cas, placez 3 marqueurs de dégâts sur le Pokémon auquel vous avez attaché l’Énergie.",
				es: "Mueve 1 Energía de 1 de los Pokémon de tu rival a otro de sus Pokémon. Si lo haces, pon 3 contadores de daño en el Pokémon al que hayas movido la Energía.",
				it: "Sposta un’Energia da uno dei Pokémon del tuo avversario a un altro dei suoi Pokémon. Se lo fai, metti tre segnalini danno sul Pokémon sul quale hai spostato l’Energia.",
				pt: "Mova 1 Energia de 1 dos Pokémon do seu oponente para outro Pokémon dele(a). Se fizer isto, coloque 3 contadores de dano no Pokémon para o qual você moveu a Energia.",
				de: "Verschiebe 1 Energie von 1 Pokémon deines Gegners auf 1 anderes seiner Pokémon. Wenn du das machst, lege 3 Schadensmarken auf das Pokémon, auf das du die Energie verschoben hast."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wrap",
				fr: "Ligotage",
				es: "Constricción",
				it: "Avvolgibotta",
				pt: "Embrulho",
				de: "Wickel"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
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



}

export default card
