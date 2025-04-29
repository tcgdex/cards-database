import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Oinkologne",
		fr: "Fragroin",
		es: "Oinkologne",
		de: "Fragrunz",
		it: "Oinkologne",
		pt: "Oinkologne",
		'es-mx': "Oinkologne"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Aromatic Stomps",
			fr: "Piétinements Aromatiques",
			es: "Pisotones Aromáticos",
			de: "Aromastampfer",
			it: "Pestone Aromatico",
			pt: "Pisada Aromática",
			'es-mx': "Pisotones Aromáticos"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, the Defending Pokémon can't attack.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			de: "Wirf 1 Münze. Bei Kopf kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar."
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
			es: "Bote Cabezazo",
			de: "Abrupter Kopfstoß",
			it: "Rimbalzo Bottintesta",
			pt: "Cabeçada Ricochete",
			'es-mx': "Cabezazo Rebotante"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
