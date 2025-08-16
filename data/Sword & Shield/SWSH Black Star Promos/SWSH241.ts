import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [94],
	set: Set,

	name: {
		fr: "Ectoplasma",
		de: "Gengar",
		es: "Gengar",
		pt: "Gengar",
		it: "Gengar",
		en: "Gengar"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Spectrum",
		de: "Alpollo",
		es: "Haunter",
		pt: "Haunter",
		it: "Haunter",
		en: "Haunter"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Porte de l'Au-delà",
			de: "Portal zum Schattenreich",
			es: "Portal al Otro Mundo",
			pt: "Portão do Mundo Inferior",
			it: "Portale Oltretomba",
			en: "Netherworld Gate"
		},

		effect: {
			fr: "Une fois pendant votre tour, si ce Pokémon est dans votre pile de défausse, vous pouvez le placer sur votre Banc. Dans ce cas, placez 3 marqueurs de dégâts sur ce Pokémon.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in deinem Ablagestapel ist, kannst du es auf deine Bank legen. Wenn du das machst, lege 3 Schadensmarken auf dieses Pokémon.",
			es: "Una vez durante tu turno, si este Pokémon está en tu pila de descartes, puedes ponerlo en tu Banca. Si lo haces, pon 3 contadores de daño en este Pokémon.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver na sua pilha de descarte, você poderá colocá-lo no seu Banco. Se fizer isto, coloque 3 contadores de dano neste Pokémon.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua pila degli scarti, puoi metterlo nella tua panchina. Se lo fai, metti tre segnalini danno su questo Pokémon.",
			en: "Once during your turn, if this Pokémon is in your discard pile, you may put it onto your Bench. If you do, put 3 damage counters on this Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Cercle Hurlant",
			de: "Kreischender Kreis",
			es: "Círculo de Gritos",
			pt: "Roda da Gritaria",
			it: "Cerchio Urlante",
			en: "Screaming Circle"
		},

		effect: {
			fr: "Placez 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire pour chaque Pokémon de Banc de votre adversaire.",
			de: "Lege für jedes Pokémon auf der Bank deines Gegners 2 Schadensmarken auf das Aktive Pokémon deines Gegners.",
			es: "Pon 2 contadores de daño en el Pokémon Activo de tu rival por cada uno de los Pokémon en Banca de tu rival.",
			pt: "Coloque 2 contadores de dano no Pokémon Ativo do seu oponente para cada Pokémon no Banco do seu oponente.",
			it: "Metti due segnalini danno sul Pokémon attivo del tuo avversario per ogni suo Pokémon in panchina.",
			en: "Put 2 damage counters on your opponent's Active Pokémon for each of your opponent's Benched Pokémon."
		}
	}],

	retreat: 2,
	regulationMark: "F",

	description: {
		en: "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar's doing."
	}
}

export default card