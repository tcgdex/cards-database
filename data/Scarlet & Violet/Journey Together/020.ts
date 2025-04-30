import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Magmar",
		fr: "Magmar",
		es: "Magmar",
		de: "Magmar",
		it: "Magmar",
		pt: "Magmar",
		'es-mx': "Magmar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
			es: "Llama Abrasadora",
			de: "Sengende Flammen",
			it: "Fiamme Ustionanti",
			pt: "Chama Cauterizante",
			'es-mx': "Llama Abrasadora"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Queimado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Quemado."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
