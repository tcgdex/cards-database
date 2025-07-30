import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Adventurer's Discovery",
		fr: "Découverte de l'Aventurière",
		es: "Descubrimiento de Aventurera",
		it: "Scoperta dell'Avventuriera",
		pt: "Descoberta da Aventureira",
		de: "Entdeckung der Abenteurerin"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Search your deck for up to 3 Pokémon V, reveal them, and put them into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck jusqu'à 3 Pokémon-V, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja hasta 3 Pokémon V, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo fino a tre Pokémon-V, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por até 3 Pokémon V no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach bis zu 3 Pokémon-V, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "E",
	illustrator: "Taira Akitsu",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582960
	}
}

export default card