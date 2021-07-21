import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
		es: "Sneasel",
		it: "Sneasel",
		pt: "Sneasel",
		de: "Sniebel"
	},
	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		215,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
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
				en: "During your next turn, this Pokémon’s Slash attack’s base damage is 80.",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Tranche de ce Pokémon sont de 80.",
				es: "Durante tu próximo turno, el daño básico del ataque Cuchillada de este Pokémon es de 80.",
				it: "Durante il tuo prossimo turno, i danni base dell’attacco Lacerazione di questo Pokémon sono 80.",
				pt: "Durante a sua próxima vez de jogar, o dano base do ataque Talho deste Pokémon será 80.",
				de: "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Schlitzer dieses Pokémon 80 Schadenspunkte."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
