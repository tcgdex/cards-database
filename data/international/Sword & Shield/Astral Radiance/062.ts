import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [475],
	set: Set,

	name: {
		'en-us': "Gallade",
		'fr-fr': "Gallame",
		'es-es': "Gallade",
		'it-it': "Gallade",
		'pt-br': "Gallade",
		'de-de': "Galagladi"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'es-es': "Kirlia",
		'it-it': "Kirlia",
		'pt-br': "Kirlia",
		'de-de': "Kirlia"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Buddy Catch",
			'fr-fr': "Attrape Partenaire",
			'es-es': "Atrapa Amigos",
			'it-it': "Catturamico",
			'pt-br': "Captura Camarada",
			'de-de': "Kumpelfang"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Supporter, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Partidario, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por 1 carta de Apoiador no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Swirling Slice",
			'fr-fr': "Coupe Tourbillonnante",
			'es-es': "Tajo Remolino",
			'it-it': "Taglio Vorticoso",
			'pt-br': "Corte em Espiral",
			'de-de': "Wirbelnder Schnitt"
		},

		effect: {
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "True to its honorable-warrior image, it uses the blades on its elbows only in defense of something or someone.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658636,
				tcgplayer: 272263
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658636,
				tcgplayer: 272263
			}
		},
	],
}

export default card
