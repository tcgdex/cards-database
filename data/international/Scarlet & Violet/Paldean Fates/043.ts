import { Card } from "models/database/card"
import Set from "../Paldean Fates"

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

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
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
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Last Respects",
			'fr-fr': "Hommage Posthume",
			'es-es': "Homenaje Póstumo",
			'it-it': "Omaggio ai KO",
			'pt-br': "Último Adeus",
			'de-de': "Letzte Ehre"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each {P} Pokémon in your discard pile.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon {P} dans votre pile de défausse.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada Pokémon {P} en tu pila de descartes.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni Pokémon {P} nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada Pokémon {P} na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jedes {P}-Pokémon in deinem Ablagestapel 10 Schadenspunkte mehr zu."
		},

		damage: "80+"
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

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751580,
				tcgplayer: 534190,
				cardtrader: 274227
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751580,
				tcgplayer: 534190,
				cardtrader: 274227
			}
		},
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "A lovingly mourned Pokémon was reborn as Houndstone. It doesn't like anyone touching the protuberance atop its head.",
	},

}

export default card
