import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Deoxys",
		'fr-fr': "Deoxys",
		'es-es': "Deoxys",
		'it-it': "Deoxys",
		'pt-br': "Deoxys",
		'de-de': "Deoxys"
	},
	illustrator: "You Iribi",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		386,
	],
	hp: 110,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Power Suction",
				'fr-fr': "Succion Puissante",
				'es-es': "Succión Poderosa",
				'it-it': "Aspirapotere",
				'pt-br': "Sucção Poderosa",
				'de-de': "Kraftsog"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move an Energy from 1 of your Pokémon to 1 of your Deoxys.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de l’un de vos Pokémon vers l’un de vos Deoxys.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes mover 1 Energía de 1 de tus Pokémon a 1 de tus Deoxys.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi spostare un’Energia da uno dei tuoi Pokémon a uno dei tuoi Deoxys.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode mover 1 Energia de 1 dos seus Pokémon para 1 Deoxys seu.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Energie von 1 deiner Pokémon auf 1 deiner Deoxys verschieben."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psycho Boost",
				'fr-fr': "Psycho Boost",
				'es-es': "Psicoataque",
				'it-it': "Psicoslancio",
				'pt-br': "Impulso Psíquico",
				'de-de': "Psyschub"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon’s Psycho Boost attack’s base damage is 50.",
				'fr-fr': "Pendant votre prochain tour, les dégâts de base de l’attaque Psycho Boost de ce Pokémon sont de 50.",
				'es-es': "Durante tu próximo turno, el daño básico del ataque Psicoataque de este Pokémon es de 50.",
				'it-it': "Durante il tuo prossimo turno, i danni base dell’attacco Psicoslancio di questo Pokémon sono 50.",
				'pt-br': "Durante a sua próxima vez de jogar, o dano base do ataque Impulso Psíquico deste Pokémon será 50.",
				'de-de': "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Psyschub dieses Pokémon 50 Schadenspunkte."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "DNA from a space virus mutated and became a Pokémon. It appears where auroras are seen.",
	},
}

export default card
