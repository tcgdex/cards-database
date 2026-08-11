import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Canceling Cologne",
		'fr-fr': "Parfum Inhibiteur",
		'es-es': "Colonia Neutralizadora",
		'it-it': "Colonia di Annullamento",
		'pt-br': "Colônia Anuladora",
		'de-de': "Neutralisierendes Parfüm"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Until the end of your turn, your opponent's Active Pokémon has no Abilities. (This includes Pokémon that come into play during that turn.)",
		'fr-fr': "Jusqu'à la fin de votre tour, le Pokémon Actif de votre adversaire n'a aucun talent. (Cela comprend les Pokémon qui sont mis en jeu pendant ce tour-là.)",
		'es-es': "Hasta el final de tu turno, el Pokémon Activo de tu rival no tiene ninguna habilidad. (Esto incluye Pokémon que entran en juego durante ese turno).",
		'it-it': "Fino alla fine del tuo turno, il Pokémon attivo del tuo avversario non ha abilità, inclusi i Pokémon entrati in gioco durante quel turno.",
		'pt-br': "Até o final do seu turno, o Pokémon Ativo do seu oponente não terá Habilidades (isto inclui Pokémon que entrarem em jogo durante aquele turno).",
		'de-de': "Bis zum Ende deines Zuges hat das Aktive Pokémon deines Gegners keine Fähigkeiten. (Dies schließt Pokémon ein, die während jenes Zuges ins Spiel gebracht werden.)"
	},

	trainerType: "Item",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658797,
				tcgplayer: 272388
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658797,
				tcgplayer: 272388
			}
		},
	],
}

export default card
