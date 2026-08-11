import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dark Bell",
		'fr-fr': "Cloche Ténébreuse",
		'es-es': "Campanilla Oscuridad",
		'es-mx': "Campana Oscura",
		'de-de': "Düsterglocke",
		'it-it': "Campanella Oscura",
		'pt-br': "Sino Sombrio"
	},

	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",

	effect: {
		'en-us': "Both Active non-{D} Pokémon are now Confused.",
		'fr-fr': "Les deux Pokémon non-{D} Actifs sont maintenant Confus.",
		'es-es': "Cualquier Pokémon Activo que no sea de tipo {D} pasa a estar Confundido.",
		'es-mx': "Cualquier Pokémon Activo que no sea de tipo {D} ahora está Confundido.",
		'de-de': "Jedes Aktive Pokémon, das kein {D}-Pokémon ist, ist jetzt verwirrt.",
		'it-it': "Entrambi i Pokémon attivi non di tipo {D} vengono confusi.",
		'pt-br': "Qualquer Pokémon Ativo que não seja de tipo {D} agora está Confuso."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895891,
				tcgplayer: 704863
			}
		},
	],
}

export default card
