import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Dark Bell",
		fr: "Cloche Ténébreuse",
		es: "Campanilla Oscuridad",
		'es-mx': "Campana Oscura",
		de: "Düsterglocke",
		it: "Campanella Oscura",
		pt: "Sino Sombrio"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",

	effect: {
		en: "Both Active non-{D} Pokémon are now Confused.",
		fr: "Les deux Pokémon non-{D} Actifs sont maintenant Confus.",
		es: "Cualquier Pokémon Activo que no sea de tipo {D} pasa a estar Confundido.",
		'es-mx': "Cualquier Pokémon Activo que no sea de tipo {D} ahora está Confundido.",
		de: "Jedes Aktive Pokémon, das kein {D}-Pokémon ist, ist jetzt verwirrt.",
		it: "Entrambi i Pokémon attivi non di tipo {D} vengono confusi.",
		pt: "Qualquer Pokémon Ativo que não seja de tipo {D} agora está Confuso."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895859,
				tcgplayer: 704832
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895859,
				tcgplayer: 704832
			}
		},
	],
}

export default card
