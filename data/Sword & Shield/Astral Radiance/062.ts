import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [475],
	set: Set,

	name: {
		en: "Gallade",
		fr: "Gallame",
		es: "Gallade",
		it: "Gallade",
		pt: "Gallade",
		de: "Galagladi"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
		es: "Kirlia",
		it: "Kirlia",
		pt: "Kirlia",
		de: "Kirlia"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Buddy Catch",
			fr: "Attrape Partenaire",
			es: "Atrapa Amigos",
			it: "Catturamico",
			pt: "Captura Camarada",
			de: "Kumpelfang"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Supporter, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Partidario, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá procurar por 1 carta de Apoiador no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Swirling Slice",
			fr: "Coupe Tourbillonnante",
			es: "Tajo Remolino",
			it: "Taglio Vorticoso",
			pt: "Corte em Espiral",
			de: "Wirbelnder Schnitt"
		},

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658636
	}
}

export default card
