import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmot",
		fr: "Pohmarmotte",
		de: "Pamomamo",
		it: "Pawmot",
		es: "Pawmot",
		pt: "Pawmot"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Electrogenesis",
			fr: "Électrogenèse",
			de: "Elektrogenese",
			it: "Elettroproduzione",
			es: "Electrorigen",
			pt: "Gênese Elétrica"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Basic {L} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Énergie {L} de base, puis l'attacher à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Basis-{L}-Energiekarte durchsuchen und sie an dieses Pokémon anlegen. Mische anschließend dein Deck.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Energia base {L} e assegnarla a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Energía {L} Básica y unirla a este Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Uma vez durante o seu turno, você poderá procurar por uma carta de Energia {L} Básica no seu baralho e ligá-la a este Pokémon. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electro Paws",
			fr: "Électro Pattes",
			de: "Elektropfoten",
			it: "Elettrozampe",
			es: "Electropatas",
			pt: "Patas Elétricas"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon."
		},

		damage: 230
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card