import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [378],

	name: {
		en: "Regice ex",
		fr: "Regice-ex",
		es: "Regice ex",
		'es-mx': "Regice ex",
		de: "Regice-ex",
		it: "Regice-ex",
		pt: "Regice ex"
	},

	illustrator: "akagi",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Regi Charge",
			fr: "Regi-Charge",
			es: "Regi Carga",
			'es-mx': "Regicarga",
			de: "Regi-Ladung",
			it: "Carica Regi",
			pt: "Carga Regi"
		},

		effect: {
			en: "Attach up to 2 Basic {W} Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie {W} de base de votre pile de défausse à ce Pokémon.",
			es: "Une hasta 2 cartas de Energía {W} Básica de tu pila de descartes a este Pokémon.",
			'es-mx': "Une hasta 2 cartas de Energía {W} Básica de tu pila de descartes a este Pokémon.",
			de: "Lege bis zu 2 Basis-{W}-Energiekarten aus deinem Ablagestapel an dieses Pokémon an.",
			it: "Assegna a questo Pokémon fino a due carte Energia base {W} dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia {W} Básica da sua pilha de descarte a este Pokémon."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Ice Prison",
			fr: "Prison de Glace",
			es: "Prisión de Hielo",
			'es-mx': "Prisión de Hielo",
			de: "Eisknast",
			it: "Prigione di Ghiaccio",
			pt: "Prisão Gélida"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon, and your opponent's Active Pokémon is now Paralyzed.",
			fr: "Défaussez 2 Énergies de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Descarta 2 Energías de este Pokémon, y el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Descarta 2 Energías de este Pokémon, y el Pokémon Activo de tu rival ahora está Paralizado.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel, und das Aktive Pokémon deines Gegners ist jetzt paralysiert.",
			it: "Scarta due Energie da questo Pokémon e il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Descarte 2 Energias deste Pokémon, e o Pokémon Ativo do seu oponente agora está Paralisado."
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675860,
		cardmarket: 869659
	}
}

export default card