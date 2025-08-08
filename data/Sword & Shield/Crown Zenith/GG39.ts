import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [457],
	set: Set,

	name: {
		en: "Lumineon V",
		fr: "Luminéon V",
		es: "Lumineon V",
		it: "Lumineon V",
		pt: "Lumineon V",
		de: "Lumineon V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Luminous Sign",
			fr: "Signe Lumineux",
			es: "Señal Luminosa",
			it: "Segnale Luminoso",
			pt: "Sinal Luminoso",
			de: "Luminöses Zeichen"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck une carte Supporter, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja 1 carta de Partidario, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá procurar por 1 carta de Apoiador no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Aqua Return",
			fr: "Retour Aquatique",
			es: "Retorno Acuático",
			it: "Idroritorno",
			pt: "Retorno Aquático",
			de: "Aquarückkehr"
		},

		effect: {
			en: "Shuffle this Pokémon and all attached cards into your deck.",
			fr: "Mélangez avec votre deck ce Pokémon et toutes les cartes attachées.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			it: "Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			pt: "Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			de: "Mische dieses Pokémon und alle angelegten Karten in dein Deck."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card