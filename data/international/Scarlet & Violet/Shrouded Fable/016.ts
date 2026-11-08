import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [96],
	set: Set,

	name: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'es-es': "Drowzee",
		'it-it': "Drowzee",
		'pt-br': "Drowzee",
		'de-de': "Traumato"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Eerie Gaze",
			'fr-fr': "Regard Étrange",
			'es-es': "Mirada Inquietante",
			'it-it': "Sguardo Inquietante",
			'pt-br': "Olhar Perturbador",
			'de-de': "Unheimlicher Blick"
		},

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire montre sa main.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano.",
			'pt-br': "Seu oponente revela a mão dele.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten."
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
	regulationMark: "H",


	illustrator: "OKUBO",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780907,
				tcgplayer: 560326
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780907,
				tcgplayer: 560326
			}
		},
	],
}

export default card
