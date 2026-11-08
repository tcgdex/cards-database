import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [1002],
	set: Set,

	name: {
		'en-us': "Chien-Pao",
		'fr-fr': "Baojian",
		'es-es': "Chien-Pao",
		'it-it': "Chien-Pao",
		'pt-br': "Chien-Pao",
		'de-de': "Baojian"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Snow Sink",
			'fr-fr': "Enlisement Neigeux",
			'es-es': "Hundimiento Nieve",
			'it-it': "Neveaffondo",
			'pt-br': "Afundar na Neve",
			'de-de': "Schneesenke"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Stadium in play.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser un Stade en jeu.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar un Estadio en juego.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare una carta Stadio in gioco.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá descartar um Estádio em jogo.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Icicle Loop",
			'fr-fr': "Boucle Stalactite",
			'es-es': "Bucle Témpano",
			'it-it': "Gelocircuito",
			'pt-br': "Loop Geladinho",
			'de-de': "Eiszapfenschleife"
		},

		effect: {
			'en-us': "Put an Energy attached to this Pokémon into your hand.",
			'fr-fr': "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			'es-es': "Pon 1 Energía unida a este Pokémon en tu mano.",
			'it-it': "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma Energia ligada a este Pokémon na sua mão.",
			'de-de': "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794322,
				tcgplayer: 589898
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794322,
				tcgplayer: 589898
			}
		},
	],

	illustrator: "Yuya Oka",
	
}

export default card
