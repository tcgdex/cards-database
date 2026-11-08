import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [356],
	set: Set,

	name: {
		'en-us': "Dusclops",
		'fr-fr': "Téraclope",
		'es-es': "Dusclops",
		'it-it': "Dusclops",
		'pt-br': "Dusclops",
		'de-de': "Zwirrklop"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Duskull",
		'fr-fr': "Skelénox",
		'es-es': "Duskull",
		'it-it': "Duskull",
		'pt-br': "Duskull",
		'de-de': "Zwirrlicht"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Fade to Black",
			'fr-fr': "Fondu au Noir",
			'es-es': "Ennegrecer",
			'it-it': "Svanire nel Buio",
			'pt-br': "Breu",
			'de-de': "Schwarz vor Augen"
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
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Its body is entirely hollow. When it opens its mouth, it sucks everything in as if it were a black hole.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691780,
				tcgplayer: 478180
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691780,
				tcgplayer: 478180
			}
		},
	],
}

export default card
