import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Onix",
		fr: "Onix",
		de: "Onix",
		it: "Onix",
		es: "Onix",
		pt: "Onix",
		'es-mx': "Onix"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bind",
			fr: "Étreinte",
			de: "Klammergriff",
			it: "Legatutto",
			es: "Atadura",
			pt: "Ligação",
			'es-mx': "Atadura"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Strength",
			fr: "Force",
			de: "Stärke",
			it: "Forza",
			es: "Fuerza",
			pt: "Força",
			'es-mx': "Fuerza"
		},

		damage: 100
	}],

	retreat: 4,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654409
	}
}

export default card