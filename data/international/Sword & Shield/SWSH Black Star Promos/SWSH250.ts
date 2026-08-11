import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [457],
	set: Set,

	name: {
		'fr-fr': "Luminéon V",
		'de-de': "Lumineon V",
		'es-es': "Lumineon V",
		'pt-br': "Lumineon V",
		'it-it': "Lumineon V",
		'en-us': "Lumineon V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Signe Lumineux",
			'de-de': "Luminöses Zeichen",
			'es-es': "Señal Luminosa",
			'pt-br': "Sinal Luminoso",
			'it-it': "Segnale Luminoso",
			'en-us': "Luminous Sign"
		},

		effect: {
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck une carte Supporter, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja 1 carta de Partidario, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá procurar por 1 carta de Apoiador no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Retour Aquatique",
			'de-de': "Aquarückkehr",
			'es-es': "Retorno Acuático",
			'pt-br': "Retorno Aquático",
			'it-it': "Idroritorno",
			'en-us': "Aqua Return"
		},

		effect: {
			'fr-fr': "Mélangez avec votre deck ce Pokémon et toutes les cartes attachées.",
			'de-de': "Mische dieses Pokémon und alle angelegten Karten in dein Deck.",
			'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			'pt-br': "Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			'it-it': "Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			'en-us': "Shuffle this Pokémon and all attached cards into your deck."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 665991
	}
}

export default card
