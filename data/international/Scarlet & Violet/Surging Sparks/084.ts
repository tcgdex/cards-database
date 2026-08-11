import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [677],
	set: Set,

	name: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
		'es-es': "Espurr",
		'it-it': "Espurr",
		'pt-br': "Espurr",
		'de-de': "Psiau"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "See Through",
			'fr-fr': "Main Transparente",
			'es-es': "Transparencia",
			'it-it': "Sbirciatina",
			'pt-br': "Transparência",
			'de-de': "Durchblick"
		},

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire montre sa main.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano.",
			'pt-br': "Seu oponente revela a mão dele.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'es-es': "Disparo Psi",
			'it-it': "Psicosparo",
			'pt-br': "Tiro Psíquico",
			'de-de': "Psychoschuss"
		},

		damage: 20
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
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794386,
				tcgplayer: 589936
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794386,
				tcgplayer: 589936
			}
		},
	],

	illustrator: "Natsumi Yoshida",
	
}

export default card
