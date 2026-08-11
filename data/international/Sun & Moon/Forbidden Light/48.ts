import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		680,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Curse of the Blade",
				'fr-fr': "Lame Sortilège",
				'es-es': "Maldición de la Cuchilla",
				'it-it': "Maledizione delle Lame",
				'pt-br': "Maldição da Lâmina",
				'de-de': "Fluch der Klinge"
			},
			effect: {
				'en-us': "Put 3 damage counters on each of your opponent’s Pokémon that has a Pokémon Tool card attached to it.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire auquel une carte Outil Pokémon est attachée.",
				'es-es': "Pon 3 contadores de daño en cada uno de los Pokémon de tu rival que tenga 1 carta de Herramienta Pokémon unida a él.",
				'it-it': "Metti tre segnalini danno su ciascuno dei Pokémon del tuo avversario che abbia una carta Oggetto Pokémon assegnata.",
				'pt-br': "Coloque 3 contadores de dano em cada um dos Pokémon do seu oponente que tiver uma carta de Ferramenta Pokémon ligada a ele.",
				'de-de': "Lege 3 Schadensmarken auf jedes Pokémon deines Gegners, an das eine Pokémon-Ausrüstung angelegt ist."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The complex attack patterns of its two swords are unstoppable, even for an opponent greatly accomplished at swordplay.",
	},

	thirdParty: {
		cardmarket: 355567,
		tcgplayer: 165699
	}
}

export default card
