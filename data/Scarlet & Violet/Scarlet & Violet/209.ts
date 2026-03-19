import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [923],
	set: Set,

	name: {
		en: "Pawmot",
		fr: "Pohmarmotte",
		es: "Pawmot",
		it: "Pawmot",
		pt: "Pawmot",
		de: "Pamomamo"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		en: "Pawmo",
		fr: "Pohmotte"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Electrogenesis",
			fr: "Électrogenèse",
			es: "Electrorigen",
			it: "Elettroproduzione",
			pt: "Gênese Elétrica",
			de: "Elektrogenese"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Basic {L} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Énergie {L} de base, puis l'attacher à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Energía {L} Básica y unirla a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Energia base {L} e assegnarla a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá procurar por uma carta de Energia {L} Básica no seu baralho e ligá-la a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Basis-{L}-Energiekarte durchsuchen und sie an dieses Pokémon anlegen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electro Paws",
			fr: "Électro Pattes",
			es: "Electropatas",
			it: "Elettrozampe",
			pt: "Patas Elétricas",
			de: "Elektropfoten"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 230
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Kouki Saitou",

	thirdParty: {
        cardmarket: 702505,
        tcgplayer: 490069
    }
}

export default card