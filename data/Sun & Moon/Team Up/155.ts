import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
		es: "Fósil Desconocido",
		it: "Fossile Sconosciuto",
		pt: "Fóssil Não Identificado",
		de: "Unbekanntes Fossil"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Jouez cette carte comme si c’était un Pokémon Colorless de base avec 60 PV. N’importe quand pendant votre tour (avant votre attaque), vous pouvez défausser cette carte du jeu.\n\nCette carte ne peut pas battre en retraite.",
		en: "Play this card as if it were a 60-HP Colorless Basic Pokémon. At any time during your turn (before your attack), you may discard this card from play.\n\nThis card can’t retreat.",
		es: "Juega esta carta como si fuera un Pokémon Básico Colorless de 60 PS. En cualquier momento durante tu turno (antes de tu ataque), puedes descartar esta carta del juego.\n\nEsta carta no puede retirarse.",
		it: "Gioca questa carta come se fosse un Pokémon Base Colorless da 60 PS. Durante il tuo turno, in qualsiasi momento, prima di attaccare, puoi scartare questa carta dal gioco.\n\nNon puoi far ritirare questa carta.",
		pt: "Jogue esta carta como se fosse um Pokémon Colorless Básico com PS 60. A qualquer momento, durante a sua vez de jogar (antes de atacar), você pode descartar esta carta do jogo.\n\nEsta carta não pode recuar.",
		de: "Spiele diese Karte, als ob sie ein Colorless-Basis-Pokémon mit 60 KP wäre. Du kannst diese Karte jederzeit während deines Zuges (bevor du angreifst) aus dem Spiel nehmen und auf deinen Ablagestapel legen.\n\nDiese Karte kann sich nicht zurückziehen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 369080,
		tcgplayer: 183959
	}
}

export default card
