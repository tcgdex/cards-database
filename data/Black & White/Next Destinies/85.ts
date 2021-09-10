import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Cinccino",
		fr: "Pashmilla",
		es: "Cinccino",
		it: "Cinccino",
		pt: "Cinccino",
		de: "Chillabell"
	},
	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		573,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Smooth Coat",
				fr: "Pelage Lustré",
				es: "Manto Suave",
				it: "Pelliscia",
				pt: "Manto Suave",
				de: "Geschmeidiger Mantel"
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c’est face, évitez les dégâts.",
				es: "Si se inflige cualquier daño a este Pokémon por ataques, lanza una moneda. Si sale cara, evita ese daño.",
				it: "Se questo Pokémon subisce danni da attacchi, lancia una moneta. Se esce testa, previeni quei danni.",
				pt: "Se qualquer dano for causado a este Pokémon por ataques, jogue uma moeda. Se sair cara, o dano será impedido.",
				de: "Wirf 1 Münze, wenn diesem Pokémon durch Angriffe Schaden zugefügt wird. Bei „Kopf“ verhindere diesen Schaden."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Echoed Voice",
				fr: "Écho",
			},
			effect: {
				en: "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
