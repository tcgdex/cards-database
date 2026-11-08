import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Magnetic Metal Energy",
		'fr-fr': "Énergie Metal Magnétique",
		'es-es': "Energía Metal Magnética",
		'es-mx': "Energía Metal Magnética",
		'de-de': "Magnetische Metal-Energie",
		'it-it': "Energia Metal Magnetica",
		'pt-br': "Energia Metal Magnética"
	},

	rarity: "Rare",
	category: "Energy",
	energyType: "Normal",
	regulationMark: "J",

	effect: {
		'en-us': "As long as this card is attached to a Pokémon, it provides {M} Energy.\n\nThe {M} Pokémon this card is attached to has no Retreat Cost.",
		'fr-fr': "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {M}.\n\nLe Pokémon {M} auquel cette carte est attachée n'a pas de Coût de Retraite.",
		'es-es': "Mientras esta carta esté unida a un Pokémon, proporciona 1 Energía {M}.\nEl Pokémon {M} al que esté unida esta carta no tiene ningún Coste de Retirada.",
		'es-mx': "Mientras esta carta esté unida a un Pokémon, proporciona Energía {M}.\n\nEl Pokémon {M} al que esté unida esta carta no tiene ningún Costo de Retirada.",
		'de-de': "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {M}-Energie.\n\nDas {M}-Pokémon, an das diese Karte angelegt ist, hat keine Rückzugskosten.",
		'it-it': "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia {M}.\n\nIl Pokémon {M} a cui è assegnata questa carta non ha costo di ritirata.",
		'pt-br': "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia {M}.\n\nO Pokémon {M} ao qual esta carta está ligada não tem Custo de Recuo."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 898185,
				tcgplayer: 707308
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886477,
				tcgplayer: 693506
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 886477,
				tcgplayer: 693506
			}
		},
	],
}

export default card
