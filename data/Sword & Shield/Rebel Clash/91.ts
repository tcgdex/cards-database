import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Dragapult",
		fr: "Lanssorien",
		es: "Dragapult",
		it: "Dragapult",
		pt: "Dragapult",
		de: "Katapuldra"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Drakloak",
		fr: "Dispareptil",
		es: "Drakloak",
		it: "Drakloak",
		pt: "Drakloak",
		de: "Phandra"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Infiltrator",
				fr: "Infiltration",
				es: "Allanamiento",
				it: "Intrapasso",
				pt: "Infiltrado",
				de: "Schwebedurch"
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez ces dégâts.",
				es: "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, evita ese daño.",
				it: "Se questo Pokémon subisce danni da qualsiasi attacco, lancia una moneta. Se esce testa, previeni quei danni.",
				pt: "Se qualquer dano for causado a este Pokémon por ataques, jogue 1 moeda. Se sair cara, previna aquele dano.",
				de: "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere jenen Schaden bei Kopf."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Phantom Force",
				fr: "Hantise",
				es: "Golpe Fantasma",
				it: "Spettrotuffo",
				pt: "Golpe Fantasma",
				de: "Phantomkraft"
			},
			effect: {
				en: "Put 3 damage counters on your opponent's Benched Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
				es: "Pon 3 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
				it: "Metti tre segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
				pt: "Coloque 3 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
				de: "Lege 3 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
			},
			damage: 120,

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
			value: "-30"
		},
	],

	hp: 150,
	types: ["Psychic"],
	regulationMark: "D",
	retreat: 0,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "When it isn't battling, it keeps Dreepy in the holes on its horns. Once a fight starts, it launches the Dreepy like supersonic missiles."
	}
}

export default card
