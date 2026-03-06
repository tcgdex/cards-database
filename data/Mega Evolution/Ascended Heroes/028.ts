import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Camerupt",
		fr: "Camérupt",
		es: "Camerupt",
		'es-mx': "Camerupt",
		de: "Camerupt",
		it: "Camerupt",
		pt: "Camerupt"
	},

	illustrator: "Minahamu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Roasting Burn",
			fr: "Brûlure Roussie",
			es: "Quemadura Abrasadora",
			'es-mx': "Quemadura Abrasadora",
			de: "Bratendes Brennen",
			it: "Ustione Rovente",
			pt: "Torrefação Ardente"
		},

		effect: {
			en: "If your opponent's Active Pokémon isn't Burned, this attack does nothing.",
			fr: "Si le Pokémon Actif de votre adversaire n'est pas Brûlé, cette attaque ne fait rien.",
			es: "Si el Pokémon Activo de tu rival no está Quemado, este ataque no hace nada.",
			'es-mx': "Si el Pokémon Activo de tu rival no está Quemado, este ataque no hace nada.",
			de: "Wenn das Aktive Pokémon deines Gegners nicht verbrannt ist, hat diese Attacke keine Auswirkungen.",
			it: "Se il Pokémon attivo del tuo avversario non è bruciato, questo attacco non ha effetto.",
			pt: "Se o Pokémon Ativo do seu oponente não estiver Queimado, este ataque não fará nada."
		},

		damage: 110
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Power Stomp",
			fr: "Piétinement Puissant",
			es: "Pisotón Vigoroso",
			'es-mx': "Pisotón Poderoso",
			de: "Kraftstampfer",
			it: "Forzapestone",
			pt: "Pisoteada Poderosa"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon."
		},

		damage: 170
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675840,
		cardmarket: 869639
	}
}

export default card