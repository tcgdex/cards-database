import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		it: "Doublade",
		pt: "Doublade",
		de: "Duokles"
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
		en: "Honedge",
		fr: "Monorpale",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Curse of the Blade",
				fr: "Lame Sortilège",
				es: "Maldición de la Cuchilla",
				it: "Maledizione delle Lame",
				pt: "Maldição da Lâmina",
				de: "Fluch der Klinge"
			},
			effect: {
				en: "Put 3 damage counters on each of your opponent’s Pokémon that has a Pokémon Tool card attached to it.",
				fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire auquel une carte Outil Pokémon est attachée.",
				es: "Pon 3 contadores de daño en cada uno de los Pokémon de tu rival que tenga 1 carta de Herramienta Pokémon unida a él.",
				it: "Metti tre segnalini danno su ciascuno dei Pokémon del tuo avversario che abbia una carta Oggetto Pokémon assegnata.",
				pt: "Coloque 3 contadores de dano em cada um dos Pokémon do seu oponente que tiver uma carta de Ferramenta Pokémon ligada a ele.",
				de: "Lege 3 Schadensmarken auf jedes Pokémon deines Gegners, an das eine Pokémon-Ausrüstung angelegt ist."
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

	thirdParty: {
		cardmarket: 355567,
		tcgplayer: 165699
	}
}

export default card
