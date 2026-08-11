import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [456],
	set: Set,

	name: {
		'fr-fr': "Écayon",
		'de-de': "Finneon",
		'es-es': "Finneon",
		'pt-br': "Finneon",
		'it-it': "Finneon",
		'en-us': "Finneon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Cortège Océanique",
			'de-de': "Ozeanische Begleitung",
			'es-es': "Acompañamiento Oceánico",
			'pt-br': "Escolta Oceânica",
			'it-it': "Scorta Oceanica",
			'en-us': "Oceanic Accompaniment"
		},

		effect: {
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {W} de votre main à l'un de vos Pokémon ayant l'attaque Nage Libre.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 {W}-Energiekarte aus deiner Hand an 1 deiner Pokémon, das die Attacke Freischwimmen hat, anlegen.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {W} de tu mano a 1 de tus Pokémon que tenga el ataque Nado Libre.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia {W} da sua mão a 1 dos seus Pokémon que tiver o ataque Nadar Sossegado.",
			'it-it': "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon che ha l'attacco Nuotata Libera una carta Energia {W} dalla tua mano tutte le volte che vuoi.",
			'en-us': "As often as you like during your turn, you may attach a {W} Energy card from your hand to 1 of your Pokémon that has the Swim Freely attack."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Pistolet à O",
			'de-de': "Aquaknarre",
			'es-es': "Pistola Agua",
			'pt-br': "Revólver d'Água",
			'it-it': "Pistolacqua",
			'en-us': "Water Gun"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	description: {
		'en-us': "It lures in prey with its shining tail fins. It stays near the surface during the day and moves to the depths when night falls."
	},

	thirdParty: {
		cardmarket: 665983
	}
}

export default card
