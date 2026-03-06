import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Croconaw",
		fr: "Crocrodil",
		es: "Croconaw",
		'es-mx': "Croconaw",
		de: "Tyracroc",
		it: "Croconaw",
		pt: "Croconaw"
	},

	illustrator: "Felicia Chen",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",
	dexId: [159],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Crunch",
			fr: "Mâchouille",
			es: "Triturar",
			'es-mx': "Triturar",
			de: "Knirscher",
			it: "Sgranocchio",
			pt: "Mastigada"
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'es-mx': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675854,
		cardmarket: 869653
	}
}

export default card