import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Oricorio",
		fr: "Plumeline",
		es: "Oricorio",
		it: "Oricorio",
		pt: "Oricorio",
		de: "Choreogel"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		741,
	],
	hp: 90,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Feather Dance",
				fr: "Danse-Plume",
				es: "Danza Pluma",
				it: "Danzadipiume",
				pt: "Dança das Penas",
				de: "Daunenreigen"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Pom-Pom Punch attack’s base damage is 100.",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Poing Pom-Pom de ce Pokémon sont de 100.",
				es: "Durante tu próximo turno, el daño básico del ataque Puñetazo Animado de este Pokémon es de 100.",
				it: "Durante il tuo prossimo turno, i danni base dell’attacco Pugno Cheerdance di questo Pokémon sono 100.",
				pt: "Durante a sua próxima vez de jogar, o dano base do ataque Soco de Pompom deste Pokémon será 100.",
				de: "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Cheerleading-Hieb dieses Pokémon 100 Schadenspunkte."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Pom-Pom Punch",
				fr: "Poing Pom-Pom",
				es: "Puñetazo Animado",
				it: "Pugno Cheerdance",
				pt: "Soco de Pompom",
				de: "Cheerleading-Hieb"
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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
