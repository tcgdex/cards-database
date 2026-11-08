import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [972],
	set: Set,

	name: {
		'fr-fr': "Tomberro-ex",
		'en-us': "Houndstone ex",
		'es-es': "Houndstone ex",
		'it-it': "Houndstone-ex",
		'pt-br': "Houndstone ex",
		'de-de': "Friedwuff-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Toutombe",
		'en-us': "Greavard",
		'es-es': "Greavard",
		'it-it': "Greavard",
		'pt-br': "Greavard",
		'de-de': "Gruff"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Grosse Morsure",
			'en-us': "Big Bite",
			'es-es': "Gran Mordisco",
			'it-it': "Grande Morso",
			'pt-br': "Mordidona",
			'de-de': "Mächtiger Biss"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Hommage Posthume",
			'en-us': "Last Respects",
			'es-es': "Homenaje Póstumo",
			'it-it': "Omaggio ai KO",
			'pt-br': "Último Adeus",
			'de-de': "Letzte Ehre"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon {P} dans votre pile de défausse.",
			'en-us': "This attack does 10 more damage for each {P} Pokémon in your discard pile.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada Pokémon {P} en tu pila de descartes.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni Pokémon {P} nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada Pokémon {P} na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jedes {P}-Pokémon in deinem Ablagestapel 10 Schadenspunkte mehr zu."
		},

		damage: "160+"
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
				cardmarket: 725182,
				tcgplayer: 509958,
				cardtrader: 255787
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
