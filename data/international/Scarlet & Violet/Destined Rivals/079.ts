import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [96],
	set: Set,

	name: {
		'en-us': "Team Rocket's Drowzee",
		'fr-fr': "Soporifik de la Team Rocket",
		'de-de': "Team Rockets Traumato",
		'it-it': "Drowzee del Team Rocket",
		'es-es': "Drowzee del Team Rocket",
		'pt-br': "Drowzee da Equipe Rocket",
		'es-mx': "Drowzee del Equipo Rocket"
	},


	illustrator: "matazo",

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Hypnotic Ray",
			'fr-fr': "Onde Hypnotique",
			'de-de': "Hypnotischer Strahl",
			'it-it': "Ipnoraggio",
			'es-es': "Rayo Hipnótico",
			'pt-br': "Raio Hipnótico",
			'es-mx': "Rayo Hipnótico"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido."
		},

		damage: 10
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
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825953,
				tcgplayer: 632889
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825953,
				tcgplayer: 632889
			}
		},
	],
}

export default card
