import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [971],
	set: Set,

	name: {
		'en-us': "Greavard",
		'fr-fr': "Toutombe",
		'es-es': "Greavard",
		'it-it': "Greavard",
		'pt-br': "Greavard",
		'de-de': "Gruff"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Graveyard Gamboling",
			'fr-fr': "Cabriole Funèbre",
			'es-es': "Jugueteo en el Cementerio",
			'it-it': "Saltellacimitero",
			'pt-br': "Cambalhotas no Cemitério",
			'de-de': "Grufttollerei"
		},

		effect: {
			'en-us': "This attack does 10 damage for each {P} Pokémon in your discard pile.",
			'fr-fr': "Cette attaque inflige 10 dégâts pour chaque Pokémon {P} dans votre pile de défausse.",
			'es-es': "Este ataque hace 10 puntos de daño por cada Pokémon {P} en tu pila de descartes.",
			'it-it': "Questo attacco infligge 10 danni per ogni Pokémon {P} nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 10 pontos de dano para cada Pokémon {P} na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jedes {P}-Pokémon in deinem Ablagestapel 10 Schadenspunkte zu."
		},

		damage: "10×"
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
	regulationMark: "G",
	illustrator: "Nisota Niso",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 751794,
				tcgplayer: 536072
			},
		}
	],
}

export default card
