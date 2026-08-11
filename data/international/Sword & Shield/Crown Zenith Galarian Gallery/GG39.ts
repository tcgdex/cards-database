import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [457],
	set: Set,

	name: {
		'en-us': "Lumineon V",
		'fr-fr': "Luminéon V",
		'es-es': "Lumineon V",
		'it-it': "Lumineon V",
		'pt-br': "Lumineon V",
		'de-de': "Lumineon V"
	},

	illustrator: "Jerky",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Luminous Sign",
			'fr-fr': "Signe Lumineux",
			'es-es': "Señal Luminosa",
			'it-it': "Segnale Luminoso",
			'pt-br': "Sinal Luminoso",
			'de-de': "Luminöses Zeichen"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck une carte Supporter, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja 1 carta de Partidario, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá procurar por 1 carta de Apoiador no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Aqua Return",
			'fr-fr': "Retour Aquatique",
			'es-es': "Retorno Acuático",
			'it-it': "Idroritorno",
			'pt-br': "Retorno Aquático",
			'de-de': "Aquarückkehr"
		},

		effect: {
			'en-us': "Shuffle this Pokémon and all attached cards into your deck.",
			'fr-fr': "Mélangez avec votre deck ce Pokémon et toutes les cartes attachées.",
			'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			'it-it': "Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			'pt-br': "Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			'de-de': "Mische dieses Pokémon und alle angelegten Karten in dein Deck."
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


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691919,
				tcgplayer: 478068
			}
		},
	],
}

export default card
