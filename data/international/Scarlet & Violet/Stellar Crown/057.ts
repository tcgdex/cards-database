import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [79],
	set: Set,

	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Dangle Tail",
			'fr-fr': "Queue Ballante",
			'es-es': "Cola Reclamo",
			'it-it': "Coda Ciondolante",
			'pt-br': "Cauda Atrapalhada",
			'de-de': "Baumelschweif"
		},

		effect: {
			'en-us': "Put a Pokémon from your discard pile into your hand.",
			'fr-fr': "Ajoutez un Pokémon de votre pile de défausse à votre main.",
			'es-es': "Pon 1 Pokémon de tu pila de descartes en tu mano.",
			'it-it': "Prendi un Pokémon dalla tua pila degli scarti e aggiungilo alle carte che hai in mano.",
			'pt-br': "Coloque um Pokémon da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Pokémon aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
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
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785911,
				tcgplayer: 567283
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785911,
				tcgplayer: 567283
			}
		},
	],

	illustrator: "Teeziro",

}

export default card
