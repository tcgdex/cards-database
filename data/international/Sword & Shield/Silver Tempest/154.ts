import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Earthen Seal Stone",
		'fr-fr': "Pierre Scellée Terrestre",
		'es-es': "Piedra Sello Terrestre",
		'it-it': "Sigillo Terrestre",
		'pt-br': "Pedra Selada Terrestre",
		'de-de': "Erd-Siegelstein"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Holo Rare",
	category: "Trainer",

	effect: {
		'en-us': "The Pokémon V this card is attached to can use the VSTAR Power on this card. (You still need the necessary Energy to use this attack.)",
		'fr-fr': "Le Pokémon-V auquel cette carte est attachée peut utiliser la Puissance VSTAR sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		'es-es': "El Pokémon V al que esté unida esta carta puede usar el Poder V-ASTRO de esta carta. (Sigues necesitando las Energías necesarias para usar este ataque).",
		'it-it': "Il Pokémon-V a cui è assegnata questa carta può usare il Potere V ASTRO di questa carta. Devi comunque avere l'Energia necessaria per usare questo attacco.",
		'pt-br': "O Pokémon V ao qual esta carta está ligada pode usar o Poder V-ASTRO desta carta (você ainda precisa da Energia necessária para usar este ataque).",
		'de-de': "Das Pokémon-V, an das diese Karte angelegt ist, kann die VSTAR-Power auf dieser Karte einsetzen. (Du benötigst jedoch die für diese Attacke notwendige Energie.)"
	},

	trainerType: "Tool",
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682201,
				tcgplayer: 451802
			}
		},
	],
}

export default card
