import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Silvally",
		'fr-fr': "Silvallié",
		'es-es': "Silvally",
		'es-mx': "Silvally",
		'de-de': "Amigento",
		'it-it': "Silvally",
		'pt-br': "Silvally"
	},

	illustrator: "DOM",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [773],
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Type: Null"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Call a Buddy",
			'fr-fr': "Appel à un Ami",
			'es-es': "Llamar a un Amigo",
			'es-mx': "Llamar a un Amigo",
			'de-de': "Kumpelruf",
			'it-it': "Chiama un Amico",
			'pt-br': "Chamar um Amigo"
		},

		effect: {
			'en-us': "Once during your turn, if you have no cards in your hand, you may use this Ability. Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, si vous n'avez aucune carte dans votre main, vous pouvez utiliser ce talent. Cherchez dans votre deck une carte Supporter, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, si no tienes ninguna carta en tu mano, puedes usar esta habilidad. Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Una vez durante tu turno, si no tienes ninguna carta en tu mano, puedes usar esta Habilidad. Busca en tu mazo 1 carta de Partidario, muéstrala y ponla en tu mano. Después, baraja tu mazo.",
			'de-de': "Einmal während deines Zuges, wenn du keine Karten auf deiner Hand hast, kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Una sola volta durante il tuo turno, se non hai carte in mano, puoi usare questa abilità. Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, se você não tiver cartas na sua mão, você poderá usar esta Habilidade. Procure por uma Carta de Apoiador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Air Slash",
			'fr-fr': "Lame d'Air",
			'es-es': "Tajo Aéreo",
			'es-mx': "Corte Aéreo",
			'de-de': "Luftschnitt",
			'it-it': "Eterelama",
			'pt-br': "Golpe de Ar"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: 130,

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895880,
				tcgplayer: 704852
			}
		},
	],
}

export default card
