import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Power Tablet",
		'fr-fr': "Pastille Puissance",
		'es-es': "Caramelo Energético",
		'it-it': "Compressa Energetica",
		'pt-br': "Pastilha Poderosa",
		'de-de': "Power-Tablette"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "During this turn, your Fusion Strike Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		'fr-fr': "Pendant ce tour, les attaques de vos Pokémon Poing de Fusion infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		'es-es': "Durante este turno, los ataques de tus Pokémon Golpe Fusión hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Durante questo turno, gli attacchi dei tuoi Pokémon Colpo Fusione infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Durante este turno, os ataques dos seus Pokémon Golpe Fusão causarão 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Während dieses Zuges fügen die Attacken deiner Fusionsangriff-Pokémon dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Item",
	regulationMark: "E",
	illustrator: "Toyste Beach",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582972,
				tcgplayer: 253111
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582972,
				tcgplayer: 253111
			}
		},
	],
}

export default card
