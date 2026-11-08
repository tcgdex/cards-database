import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Oricorio",
		'fr-fr': "Plumeline",
		'es-es': "Oricorio",
		'it-it': "Oricorio",
		'pt-br': "Oricorio",
		'de-de': "Choreogel"
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
				'en-us': "Feather Dance",
				'fr-fr': "Danse-Plume",
				'es-es': "Danza Pluma",
				'it-it': "Danzadipiume",
				'pt-br': "Dança das Penas",
				'de-de': "Daunenreigen"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon’s Pom-Pom Punch attack’s base damage is 100.",
				'fr-fr': "Pendant votre prochain tour, les dégâts de base de l’attaque Poing Pom-Pom de ce Pokémon sont de 100.",
				'es-es': "Durante tu próximo turno, el daño básico del ataque Puñetazo Animado de este Pokémon es de 100.",
				'it-it': "Durante il tuo prossimo turno, i danni base dell’attacco Pugno Cheerdance di questo Pokémon sono 100.",
				'pt-br': "Durante a sua próxima vez de jogar, o dano base do ataque Soco de Pompom deste Pokémon será 100.",
				'de-de': "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Cheerleading-Hieb dieses Pokémon 100 Schadenspunkte."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Pom-Pom Punch",
				'fr-fr': "Poing Pom-Pom",
				'es-es': "Puñetazo Animado",
				'it-it': "Pugno Cheerdance",
				'pt-br': "Soco de Pompom",
				'de-de': "Cheerleading-Hieb"
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

	description: {
		'en-us': "This Oricorio has sipped bright yellow nectar. Its bright, cheerful dance melts the hearts of its enemies.",
	},

	thirdParty: {
		cardmarket: 297478,
		tcgplayer: 130950
	}
}

export default card
