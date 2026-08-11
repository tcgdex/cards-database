import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [972],
	set: Set,

	name: {
		'en-us': "Houndstone",
		'fr-fr': "Tomberro",
		'es-es': "Houndstone",
		'it-it': "Houndstone",
		'pt-br': "Houndstone",
		'de-de': "Friedwuff"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Greavard",
		'fr-fr': "Toutombe",
		'es-es': "Greavard",
		'it-it': "Greavard",
		'pt-br': "Greavard",
		'de-de': "Gruff"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Delve",
			'fr-fr': "Fouille Exploratoire",
			'es-es': "Fisgar",
			'it-it': "Scava scava",
			'pt-br': "Examinar",
			'de-de': "Graben"
		},

		effect: {
			'en-us': "Put up to 2 Item cards from your discard pile into your hand.",
			'fr-fr': "Ajoutez jusqu'à 2 cartes Objet de votre pile de défausse à votre main.",
			'es-es': "Pon hasta 2 cartas de Objeto de tu pila de descartes en tu mano.",
			'it-it': "Prendi fino a due carte Strumento dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque até 2 cartas de Item da sua pilha de descarte na sua mão.",
			'de-de': "Nimm bis zu 2 Itemkarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'es-es': "Disparo Embrujado",
			'it-it': "Colpomistero",
			'pt-br': "Tiro Assustador",
			'de-de': "Spukschuss"
		},

		damage: 100
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
	retreat: 3,
	regulationMark: "G",
	illustrator: "Pani Kobayashi",
	description: {
		'en-us': "Houndstone spends most of its time sleeping in graveyards. Among all the dog Pokémon, this one is most loyal to its master.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 715756,
				tcgplayer: 512914
			},
		}
	],
}

export default card
