import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [469],
	set: Set,

	name: {
		en: "Yanmega ex",
		fr: "Yanmega-ex",
		de: "Yanmega-ex",
		it: "Yanmega-ex",
		es: "Yanmega ex",
		pt: "Yanmega ex",
		'es-mx': "Yanmega ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Grass"],
	evolveFrom: {
		en: "Yanma",
		fr: "Yanma",
		de: "Yanma",
		it: "Yanma",
		es: "Yanma",
		pt: "Yanma",
		"es-mx": "Yanma"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Buzzing Boost",
			fr: "Boost Bourdonnant",
			de: "Summboost",
			it: "Ronzio Energizzante",
			es: "Zumbido Impulso",
			pt: "Zumbido Impulsor",
			'es-mx': "Impulso Zumbador"
		},

		effect: {
			en: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may search your deck for up to 3 Basic {G} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez chercher dans votre deck jusqu'à 3 cartes Énergie {G} de base, puis les attacher à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du dein Deck nach bis zu 3 Basis-{G}-Energiekarten durchsuchen und sie an dieses Pokémon anlegen. Mische anschließend dein Deck.",
			it: "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi cercare nel tuo mazzo fino a tre carte Energia base {G} e assegnarle a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			es: "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes buscar en tu baraja hasta 3 cartas de Energía {G} Básica y unirlas a este Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá procurar por até 3 cartas de Energia {G} Básica no seu baralho e ligá-las a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes buscar en tu mazo hasta 3 cartas de Energía {G} Básica y unirlas a este Pokémon. Después, baraja las cartas de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			en: "Jet Cyclone",
			fr: "Cyclone Propulsé",
			de: "Düsensturm",
			it: "Ciclone Jet",
			es: "Ciclón Propulsión",
			pt: "Jato Ciclone",
			'es-mx': "Ciclón Jet"
		},

		effect: {
			en: "Move 3 Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez 3 Énergies de ce Pokémon vers l'un de vos Pokémon de Banc.",
			de: "Verschiebe 3 Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			it: "Sposta tre Energie da questo Pokémon a uno di quelli nella tua panchina.",
			es: "Mueve 3 Energías de este Pokémon a uno de tus Pokémon en Banca.",
			pt: "Mova 3 Energias deste Pokémon para 1 dos seus Pokémon no Banco.",
			'es-mx': "Mueve 3 Energías de este Pokémon a 1 de tus Pokémon en Banca."
		},

		damage: 210
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'holo'
		},
	]
}

export default card
