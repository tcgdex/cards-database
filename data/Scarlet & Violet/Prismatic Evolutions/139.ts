import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Larry's Skill",
		fr: "Compétence d'Okuba",
		es: "Talento de Laureano",
		pt: "Talento do Lauro",
		it: "Competenza di Ubaldo",
		de: "Aokis Geschick"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Discard your hand and search your deck for a Pokémon, a Supporter card, and a Basic Energy card, reveal them, and put them into your hand. Then, shuffle your deck.",
		fr: "Défaussez votre main et cherchez dans votre deck un Pokémon, une carte Supporter et une carte Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		es: "Descarta las cartas de tu mano y busca en tu baraja 1 carta de Pokémon, 1 carta de Partidario y 1 carta de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		pt: "Descarte a sua mão e procure por um Pokémon, uma carta de Apoiador e uma carta de Energia Básica no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
		it: "Scarta le carte che hai in mano e cerca nel tuo mazzo un Pokémon, una carta Aiuto e una carta Energia base, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		de: "Lege deine Handkarten auf deinen Ablagestapel und durchsuche dein Deck nach 1 Pokémon, 1 Unterstützerkarte und 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "H",
	variants: {
		holo: true,
		normal: false
	}
}

export default card