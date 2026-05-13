import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Squirtle",
		fr: "Carapuce",
		de: "Schiggy",
		it: "Squirtle",
		es: "Squirtle",
		pt: "Squirtle",
		'es-mx': "Squirtle"
	},

	illustrator: "Saboteri",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	dexId: [7],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Bubble",
			fr: "Écume",
			de: "Blubber",
			it: "Bolla",
			es: "Burbuja",
			pt: "Bolha",
			'es-mx': "Burbuja"
		},

		damage: 10,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		}
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		cardmarket: 875188
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
