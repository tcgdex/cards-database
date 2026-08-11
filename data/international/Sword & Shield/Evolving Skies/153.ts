import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Rapid Strike Scroll of the Flying Dragon",
		'fr-fr': "Rouleau du Dragon Volant Mille Poings",
		'es-es': "Pergamino Dragón Volador Golpe Fluido",
		'it-it': "Rotolo del Drago Volante Colpo Rapido",
		'pt-br': "Pergaminho do Dragão Alado Golpe Fluido",
		'de-de': "Fließender-Angriff-Flugdrachenrolle"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "The Rapid Strike Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.)",
		'fr-fr': "Le Pokémon Mille Poings auquel cette carte est attachée peut utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		'es-es': "El Pokémon Golpe Fluido al que esté unida esta carta puede usar el ataque de esta carta. (Sigues necesitando las Energías necesarias para usar este ataque).",
		'it-it': "Il Pokémon Colpo Rapido a cui è assegnata questa carta può usare l'attacco di questa carta. Devi comunque avere l'Energia necessaria per usare questo attacco.",
		'pt-br': "O Pokémon Golpe Fluido ao qual esta carta está ligada pode usar o ataque desta carta (você ainda precisa da Energia necessária para usar este ataque).",
		'de-de': "Das Fließender-Angriff-Pokémon, an das diese Karte angelegt ist, kann die Attacke auf dieser Karte einsetzen. (Du benötigst jedoch die für diese Attacke notwendige Energie.)"
	},

	trainerType: "Tool",
	illustrator: "5ban Graphics",
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574211,
				tcgplayer: 246778
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574211,
				tcgplayer: 246778
			}
		},
	],
}

export default card
