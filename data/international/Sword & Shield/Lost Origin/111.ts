import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [874],
	set: Set,

	name: {
		'en-us': "Stonjourner",
		'fr-fr': "Dolman",
		'es-es': "Stonjourner",
		'it-it': "Stonjourner",
		'pt-br': "Stonjourner",
		'de-de': "Humanolith"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Power Stone",
			'fr-fr': "Pierre Puissante",
			'es-es': "Roca Poderosa",
			'it-it': "Pietra Potente",
			'pt-br': "Pedra do Poder",
			'de-de': "Kraftstein"
		},

		effect: {
			'en-us': "Attach up to 2 Fighting Energy cards from your hand to your Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie Fighting de votre main à vos Pokémon comme il vous plaît.",
			'es-es': "Une hasta 2 cartas de Energía Fighting de tu mano a tus Pokémon de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon fino a due carte Energia Fighting dalla tua mano nel modo che preferisci.",
			'pt-br': "Ligue até 2 cartas de Energia Fighting da sua mão aos seus Pokémon como desejar.",
			'de-de': "Lege bis zu 2 Fighting-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Lost Shot",
			'fr-fr': "Tir Perdu",
			'es-es': "Disparo Perdido",
			'it-it': "Colpo Perduto",
			'pt-br': "Disparo Perdido",
			'de-de': "Nirgendwo-Schuss"
		},

		effect: {
			'en-us': "Put the top card of your opponent's deck in the Lost Zone.",
			'fr-fr': "Placez la carte du dessus du deck de votre adversaire dans la Zone Perdue.",
			'es-es': "Pon la primera carta de la baraja de tu rival en la Zona Perdida.",
			'it-it': "Metti la prima carta del mazzo del tuo avversario nell'area perduta.",
			'pt-br': "Coloque a carta de cima do baralho do seu oponente na Zona Perdida.",
			'de-de': "Lege die oberste Karte des Decks deines Gegners ins Nirgendwo."
		},

		damage: 120
	}],

	retreat: 4,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674124,
				tcgplayer: 284006
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674124,
				tcgplayer: 284006
			}
		},
	],
}

export default card
