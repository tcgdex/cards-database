import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Canceling Cologne",
		fr: "Parfum Inhibiteur",
		es: "Colonia Neutralizadora",
		it: "Colonia di Annullamento",
		pt: "Colônia Anuladora",
		de: "Neutralisierendes Parfüm"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Until the end of your turn, your opponent's Active Pokémon has no Abilities. (This includes Pokémon that come into play during that turn.)",
		fr: "Jusqu'à la fin de votre tour, le Pokémon Actif de votre adversaire n'a aucun talent. (Cela comprend les Pokémon qui sont mis en jeu pendant ce tour-là.)",
		es: "Hasta el final de tu turno, el Pokémon Activo de tu rival no tiene ninguna habilidad. (Esto incluye Pokémon que entran en juego durante ese turno).",
		it: "Fino alla fine del tuo turno, il Pokémon attivo del tuo avversario non ha abilità, inclusi i Pokémon entrati in gioco durante quel turno.",
		pt: "Até o final do seu turno, o Pokémon Ativo do seu oponente não terá Habilidades (isto inclui Pokémon que entrarem em jogo durante aquele turno).",
		de: "Bis zum Ende deines Zuges hat das Aktive Pokémon deines Gegners keine Fähigkeiten. (Dies schließt Pokémon ein, die während jenes Zuges ins Spiel gebracht werden.)"
	},

	trainerType: "Item",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658797
	}
}

export default card