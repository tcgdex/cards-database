import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [482],
	set: Set,

	name: {
		'en-us': "Azelf",
		'fr-fr': "Créfadet",
		'es-es': "Azelf",
		'it-it': "Azelf",
		'pt-br': "Azelf",
		'de-de': "Tobutz"
	},

	illustrator: "Taira Akitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Mind Bend",
			'fr-fr': "Contrôleur d'Esprit",
			'es-es': "Fusión Mental",
			'it-it': "Fusione Mentale",
			'pt-br': "Dobra Mentes",
			'de-de': "Gedankenverbiegung"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It is thought that Uxie, Mesprit, and Azelf all came from the same egg.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658645,
				tcgplayer: 272268
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658645,
				tcgplayer: 272268
			}
		},
	],
}

export default card
