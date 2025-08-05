import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Luminéon V",
		de: "Lumineon V",
		es: "Lumineon V",
		pt: "Lumineon V",
		it: "Lumineon V",
		en: "Lumineon V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Signe Lumineux",
			de: "Luminöses Zeichen",
			es: "Señal Luminosa",
			pt: "Sinal Luminoso",
			it: "Segnale Luminoso",
			en: "Luminous Sign"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck une carte Supporter, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja 1 carta de Partidario, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá procurar por 1 carta de Apoiador no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Retour Aquatique",
			de: "Aquarückkehr",
			es: "Retorno Acuático",
			pt: "Retorno Aquático",
			it: "Idroritorno",
			en: "Aqua Return"
		},

		effect: {
			fr: "Mélangez avec votre deck ce Pokémon et toutes les cartes attachées.",
			de: "Mische dieses Pokémon und alle angelegten Karten in dein Deck.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			pt: "Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			it: "Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			en: "Shuffle this Pokémon and all attached cards into your deck."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 665991
	}
}

export default card