import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Blunder Policy",
		fr: "Assurance Échec",
		es: "Seguro Fallo",
		it: "Fiascopolizza",
		pt: "Seguro Contra Erro",
		de: "Fehlschlagschutz"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "If the Pokémon this card is attached to uses an attack, if you flip any coins for the damage or effect of that attack, and if any of them are tails, draw 3 cards at the end of your turn.",
		fr: "Si le Pokémon auquel cette carte est attachée utilise une attaque, que vous lancez des pièces pour les dégâts ou effets de cette attaque-là, et que vous obtenez au moins un côté pile, piochez 3 cartes à la fin de votre tour.",
		es: "Si el Pokémon al que está unida esta carta usa un ataque y lanzas monedas para el daño o el efecto de ese ataque, si sale cruz en alguna de ellas, roba 3 cartas al final de tu turno.",
		it: "Se il Pokémon a cui è assegnata questa carta usa un attacco, se lanci almeno una volta una moneta per i danni o per l'effetto di quell'attacco e se esce almeno una volta croce, pesca tre carte alla fine del tuo turno.",
		pt: "Se o Pokémon ao qual esta carta está ligada usar um ataque, se você jogar qualquer moeda para o dano ou efeito daquele ataque, e se qualquer uma delas sair coroa, compre 3 cartas no final do seu turno.",
		de: "Wenn das Pokémon, an das diese Karte angelegt ist, eine Attacke einsetzt, wenn du mindestens 1 Münze für den Schaden oder Effekt jener Attacke wirfst und wenn mindestens 1 Münze Zahl zeigt, ziehe am Ende deines Zuges 3 Karten."
	},

	trainerType: "Tool",
	regulationMark: "E",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card