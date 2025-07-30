import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Arc Phone",
		fr: "Smarceus",
		es: "Móvil Arceus",
		it: "Arceusphone",
		pt: "Arc Fone",
		de: "ArceusPhone"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Look at the top card of your deck. You may switch that card with 1 of your face-down Prize cards. (The cards stay face down.)",
		fr: "Regardez la carte du dessus de votre deck. Vous pouvez échanger cette carte-là contre l'une de vos cartes Récompense actuellement face cachée. (Les cartes restent face cachée.)",
		es: "Mira la primera carta de tu baraja. Puedes cambiar esa carta por 1 de tus cartas de Premio que están boca abajo. (Las cartas permanecen boca abajo).",
		it: "Guarda la prima carta del tuo mazzo. Puoi scambiare quella carta con una delle tue carte Premio coperte. Le carte restano coperte.",
		pt: "Olhe a carta de cima do seu baralho. Você pode trocar aquela carta por 1 das suas cartas de Prêmio viradas para baixo (as cartas continuam viradas para baixo).",
		de: "Schau dir die oberste Karte deines Decks an. Du kannst jene Karte gegen 1 deiner verdeckten Preiskarten austauschen. (Die Karten bleiben verdeckt.)"
	},

	trainerType: "Item",
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674161
	}
}

export default card