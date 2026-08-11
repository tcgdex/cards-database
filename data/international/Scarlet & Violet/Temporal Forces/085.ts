import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [529],
	set: Set,

	name: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dig Dig Dig",
			'fr-fr': "Triple Creusement",
			'es-es': "Cava que te Cava",
			'it-it': "Scava a Fondo",
			'pt-br': "Cavar Cavar Cavar",
			'de-de': "Buddelei"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 3 Basic {F} Energy cards and discard them. Then, shuffle your deck.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 3 cartes Énergie {F} de base et les défausser. Mélangez ensuite votre deck.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja hasta 3 cartas de Energía {F} Básica y descartarlas. Después, baraja las cartas de tu baraja.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo fino a tre carte Energia base {F} e scartarle. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá procurar por até 3 cartas de Energia {F} Básica no seu baralho e descartá-las. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach bis zu 3 Basis-{F}-Energiekarten durchsuchen und sie auf deinen Ablagestapel legen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Sand Spray",
			'fr-fr': "Jet Sableux",
			'es-es': "Rociado de Arena",
			'it-it': "Silicospruzzo",
			'pt-br': "Spray de Areia",
			'de-de': "Sandspray"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It brings its claws together and whirls around at high speed before rushing toward its prey.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760715,
				tcgplayer: 542829
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760715,
				tcgplayer: 542829
			}
		},
	],

	illustrator: "Kariya",

}

export default card