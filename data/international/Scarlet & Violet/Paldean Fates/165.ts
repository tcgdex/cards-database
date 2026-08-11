import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [957],
	set: Set,

	name: {
		'en-us': "Tinkatink",
		'fr-fr': "Forgerette",
		'es-es': "Tinkatink",
		'it-it': "Tinkatink",
		'pt-br': "Tinkatink",
		'de-de': "Forgita"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scrap Pickup",
			'fr-fr': "Récup Rebut",
			'es-es': "Recogida de Chatarra",
			'it-it': "Raccogliscarti",
			'pt-br': "Catar Sucata",
			'de-de': "Schrottverwertung"
		},

		effect: {
			'en-us': "Put an Item card from your discard pile into your hand.",
			'fr-fr': "Ajoutez une carte Objet de votre pile de défausse à votre main.",
			'es-es': "Pon 1 carta de Objeto de tu pila de descartes en tu mano.",
			'it-it': "Prendi una carta Strumento dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma carta de Item da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Itemkarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Fairy Wind",
			'fr-fr': "Vent Féérique",
			'es-es': "Viento Feérico",
			'it-it': "Vento di Fata",
			'pt-br': "Vento de Fada",
			'de-de': "Feenbrise"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751704,
				tcgplayer: 534697,
				cardtrader: 274350
			}
		},
	],

	illustrator: "yuu",

	description: {
		'en-us': "It swings its handmade hammer around to protect itself, but the hammer is often stolen by Pokémon that eat metal.",
	},

}

export default card
