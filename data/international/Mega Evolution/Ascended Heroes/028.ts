import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Camerupt",
		'fr-fr': "Camérupt",
		'es-es': "Camerupt",
		'es-mx': "Camerupt",
		'de-de': "Camerupt",
		'it-it': "Camerupt",
		'pt-br': "Camerupt"
	},

	evolveFrom: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'es-es': "Numel",
		'es-mx': "Numel",
		'de-de': "Camaub",
		'it-it': "Numel",
		'pt-br': "Numel",
	},

	illustrator: "Minahamu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [323],
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Roasting Burn",
			'fr-fr': "Brûlure Roussie",
			'es-es': "Quemadura Abrasadora",
			'es-mx': "Quemadura Abrasadora",
			'de-de': "Bratendes Brennen",
			'it-it': "Ustione Rovente",
			'pt-br': "Torrefação Ardente"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon isn't Burned, this attack does nothing.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire n'est pas Brûlé, cette attaque ne fait rien.",
			'es-es': "Si el Pokémon Activo de tu rival no está Quemado, este ataque no hace nada.",
			'es-mx': "Si el Pokémon Activo de tu rival no está Quemado, este ataque no hace nada.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners nicht verbrannt ist, hat diese Attacke keine Auswirkungen.",
			'it-it': "Se il Pokémon attivo del tuo avversario non è bruciato, questo attacco non ha effetto.",
			'pt-br': "Se o Pokémon Ativo do seu oponente não estiver Queimado, este ataque não fará nada."
		},

		damage: 110
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Power Stomp",
			'fr-fr': "Piétinement Puissant",
			'es-es': "Pisotón Vigoroso",
			'es-mx': "Pisotón Poderoso",
			'de-de': "Kraftstampfer",
			'it-it': "Forzapestone",
			'pt-br': "Pisoteada Poderosa"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	description: {
		'en-us': "The volcanoes on its back have a major eruption every 10 years--or whenever it becomes really angry.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869639,
			tcgplayer: 675840
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870182,
			tcgplayer: 676875
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870181,
			tcgplayer: 677015
		}
	},
],
}

export default card
