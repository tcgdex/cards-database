import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Skorupi",
		fr: "Rapion",
		es: "Skorupi",
		it: "Skorupi",
		pt: "Skorupi",
		de: "Pionskora"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		451,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hone Claws",
				fr: "Aiguisage",
				es: "Afilagarras",
				it: "Unghiaguzze",
				pt: "Garras Afiadas",
				de: "Klauenwetzer"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Pierce attack’s base damage is 90.",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Transpercement de ce Pokémon sont de 90.",
				es: "Durante tu próximo turno, el daño básico del ataque Perforar de este Pokémon es de 90.",
				it: "Durante il tuo prossimo turno, i danni base dell’attacco Perforare di questo Pokémon sono 90.",
				pt: "Durante a sua próxima vez de jogar, o dano base do ataque Perfurar deste Pokémon será 90.",
				de: "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Durchbohren dieses Pokémon 90 Schadenspunkte."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Pierce",
				fr: "Transpercement",
				es: "Perforar",
				it: "Perforare",
				pt: "Perfurar",
				de: "Durchbohren"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
