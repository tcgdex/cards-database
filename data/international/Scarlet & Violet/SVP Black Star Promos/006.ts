import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [923],
	set: Set,

	name: {
		'en-us': "Pawmot",
		'fr-fr': "Pohmarmotte",
		'es-es': "Pawmot",
		'it-it': "Pawmot",
		'pt-br': "Pawmot",
		'de-de': "Pamomamo"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Pawmo",
		'fr-fr': "Pohmotte",
		'es-es': "Pawmo",
		'it-it': "Pawmo",
		'pt-br': "Pawmo",
		'de-de': "Pamamo"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Electrogenesis",
			'fr-fr': "Électrogenèse",
			'es-es': "Electrorigen",
			'it-it': "Elettroproduzione",
			'pt-br': "Gênese Elétrica",
			'de-de': "Elektrogenese"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for a Basic {L} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Énergie {L} de base, puis l'attacher à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Energía {L} Básica y unirla a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Energia base {L} e assegnarla a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por uma carta de Energia {L} Básica no seu baralho e ligá-la a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Basis-{L}-Energiekarte durchsuchen und sie an dieses Pokémon anlegen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Electro Paws",
			'fr-fr': "Électro Pattes",
			'es-es': "Electropatas",
			'it-it': "Elettrozampe",
			'pt-br': "Patas Elétricas",
			'de-de': "Elektropfoten"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 230
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",
	illustrator: "GIDORA",
	description: {
		'en-us': "Pawmot's fluffy fur acts as a battery. It can store the same amount of electricity as an electric car.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 692228,
				tcgplayer: 487752
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 761120,
				tcgplayer: 522648
			},
		}
	],
}

export default card
