import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [456],
	set: Set,

	name: {
		'en-us': "Finneon",
		'fr-fr': "Écayon",
		'es-es': "Finneon",
		'it-it': "Finneon",
		'pt-br': "Finneon",
		'de-de': "Finneon"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Oceanic Accompaniment",
			'fr-fr': "Cortège Océanique",
			'es-es': "Acompañamiento Oceánico",
			'it-it': "Scorta Oceanica",
			'pt-br': "Escolta Oceânica",
			'de-de': "Ozeanische Begleitung"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Pokémon that has the Swim Freely attack.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Water de votre main à l'un de vos Pokémon ayant l'attaque Nage Libre.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Water de tu mano a 1 de tus Pokémon que tenga el ataque Nado Libre.",
			'it-it': "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon che ha l'attacco Nuotata Libera una carta Energia Water dalla tua mano tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia Water da sua mão a 1 dos seus Pokémon que tiver o ataque Nadar Sossegado.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Water-Energiekarte aus deiner Hand an 1 deiner Pokémon, das die Attacke Freischwimmen hat, anlegen."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674050,
				tcgplayer: 283914
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674050,
				tcgplayer: 283914
			}
		},
	],
}

export default card
