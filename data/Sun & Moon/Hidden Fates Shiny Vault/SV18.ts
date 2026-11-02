import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
		de: "Calamanero"
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		687,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
		de: "Iscalar"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Psychic Recharge",
				fr: "Recharge Psy",
				de: "Psycho-Aufladung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Psychic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Psychic de votre pile de défausse à l’un de vos Pokémon de Banc.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 {P}-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen."
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
				en: "Psychic Sphere",
				fr: "Sphère Psy",
				de: "Psychosphäre"
			},

			damage: 60,

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
		en: "It lures prey close with hypnotic motions, then wraps its tentacles around it before finishing it off with digestive fluids.",
		de: "Mit seinen hypnotischen Kräften lockt es Gegner an, hält sie mit den Tentakeln an seinem Kopf fest und zersetzt sie dann mit Verdauungssekret."
	},
}

export default card
