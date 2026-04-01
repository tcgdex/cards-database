import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Luxray",
		fr: "Luxray",
		es: "Luxray",
		'es-mx': "Luxray",
		de: "Luxtra",
		it: "Luxray",
		pt: "Luxray"
	},

	illustrator: "Taiga Kasai",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Incessant Onslaught",
			fr: "Assauts Continuels",
			es: "Embestida Incesante",
			'es-mx': "Asalto Incesante",
			de: "Unablässiger Ansturm",
			it: "Offensiva Continua",
			pt: "Sova Sem Fim"
		},

		effect: {
			en: "This attack does 70 damage for each Prize card you have taken.",
			fr: "Cette attaque inflige 70 dégâts pour chaque carte Récompense que vous avez récupérée.",
			es: "Este ataque hace 70 puntos de daño por cada carta de Premio que hayas cogido.",
			'es-mx': "Este ataque hace 70 puntos de daño por cada carta de Premio que hayas tomado.",
			de: "Diese Attacke fügt für jede von dir genommene Preiskarte 70 Schadenspunkte zu.",
			it: "Questo attacco infligge 70 danni per ogni carta Premio che hai preso.",
			pt: "Este ataque causa 70 pontos de dano para cada carta de Prêmio que você pegou."
		},

		damage: "70×"
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Strong Volt",
			fr: "Décharge Foudroyante",
			es: "Descarga Fulminante",
			'es-mx': "Voltio Fulminante",
			de: "Voltkraft",
			it: "Supervolt",
			pt: "Tensão Intensa"
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

		damage: 200
	}],

	retreat: 0,
	regulationMark: "J"
}

export default card