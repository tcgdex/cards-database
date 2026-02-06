import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [26],

	name: {
		en: "Raichu",
		fr: "Raichu",
		es: "Raichu",
		'es-mx': "Raichu",
		de: "Raichu",
		it: "Raichu",
		pt: "Raichu"
	},

	illustrator: "Iori Suzuki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Quick Blow",
			fr: "Coup d'Poing Éclair",
			es: "Golpe Rápido",
			'es-mx': "Golpe Rápido",
			de: "Schnellschlag",
			it: "Colpo Veloce",
			pt: "Golpe Rápido"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 50 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 50 pontos de dano a mais."
		},

		damage: "20+"
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

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
			en: "Discard a {L} Energy from this Pokémon.",
			fr: "Défaussez une Énergie {L} de ce Pokémon.",
			es: "Descarta 1 Energía {L} de este Pokémon.",
			'es-mx': "Descarta 1 Energía {L} de este Pokémon.",
			de: "Lege 1 {L}-Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia {L} da questo Pokémon.",
			pt: "Descarte uma Energia {L} deste Pokémon."
		},

		damage: 150
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675868,
		cardmarket: 869667
	}
}

export default card