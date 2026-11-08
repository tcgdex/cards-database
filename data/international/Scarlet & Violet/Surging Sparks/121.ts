import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [945],
	set: Set,

	name: {
		'en-us': "Grafaiai",
		'fr-fr': "Tag-Tag",
		'es-es': "Grafaiai",
		'it-it': "Grafaiai",
		'pt-br': "Grafaiai",
		'de-de': "Affiti"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Shroodle",
		'fr-fr': "Gribouraigne",
		'es-es': "Shroodle",
		'it-it': "Shroodle",
		'pt-br': "Shroodle",
		'de-de': "Sproxi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Mischievous Painting",
			'fr-fr': "Toile Malicieuse",
			'es-es': "Pinturas Traviesas",
			'it-it': "Disegni Birichini",
			'pt-br': "Pintura Maliciosa",
			'de-de': "Freche Malerei"
		},

		effect: {
			'en-us': "Attach up to 3 Energy cards from your opponent's discard pile to their Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 3 cartes Énergie de la pile de défausse de votre adversaire à ses Pokémon comme il vous plaît.",
			'es-es': "Une hasta 3 cartas de Energía de la pila de descartes de tu rival a sus Pokémon de la manera que desees.",
			'it-it': "Assegna ai Pokémon del tuo avversario fino a tre carte Energia dalla sua pila degli scarti nel modo che preferisci.",
			'pt-br': "Ligue até 3 cartas de Energia da pilha de descarte do seu oponente aos Pokémon dele como desejar.",
			'de-de': "Lege bis zu 3 Energiekarten aus dem Ablagestapel deines Gegners beliebig an seine Pokémon an."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Energized Graffiti",
			'fr-fr': "Graffiti Énergisé",
			'es-es': "Grafiti Energético",
			'it-it': "Graffiti Energizzati",
			'pt-br': "Grafite Energizado",
			'de-de': "Energiegeladenes Graffiti"
		},

		effect: {
			'en-us': "This attack does 40 damage for each Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 40 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 40 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 40 Schadenspunkte zu."
		},

		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794465,
				tcgplayer: 589959
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794465,
				tcgplayer: 589959
			}
		},
	],

	illustrator: "NC Empire",

}

export default card
