import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Deoxys",
		fr: "Deoxys",
		es: "Deoxys",
		it: "Deoxys",
		pt: "Deoxys",
		de: "Deoxys"
	},
	illustrator: "You Iribi",
	rarity: "Rare",
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
				en: "Power Suction",
				fr: "Succion Puissante",
				es: "Succión Poderosa",
				it: "Aspirapotere",
				pt: "Sucção Poderosa",
				de: "Kraftsog"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move an Energy from 1 of your Pokémon to 1 of your Deoxys.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de l’un de vos Pokémon vers l’un de vos Deoxys.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes mover 1 Energía de 1 de tus Pokémon a 1 de tus Deoxys.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi spostare un’Energia da uno dei tuoi Pokémon a uno dei tuoi Deoxys.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode mover 1 Energia de 1 dos seus Pokémon para 1 Deoxys seu.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Energie von 1 deiner Pokémon auf 1 deiner Deoxys verschieben."
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
				en: "Psycho Boost",
				fr: "Psycho Boost",
				es: "Psicoataque",
				it: "Psicoslancio",
				pt: "Impulso Psíquico",
				de: "Psyschub"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Psycho Boost attack’s base damage is 50.",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Psycho Boost de ce Pokémon sont de 50.",
				es: "Durante tu próximo turno, el daño básico del ataque Psicoataque de este Pokémon es de 50.",
				it: "Durante il tuo prossimo turno, i danni base dell’attacco Psicoslancio di questo Pokémon sono 50.",
				pt: "Durante a sua próxima vez de jogar, o dano base do ataque Impulso Psíquico deste Pokémon será 50.",
				de: "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Psyschub dieses Pokémon 50 Schadenspunkte."
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



}

export default card
