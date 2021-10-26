import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Rare Fossil",
		fr: "Fossile Rare",
		es: "Fósil Raro",
		it: "Fossile Raro",
		pt: "Fóssil Raro",
		de: "Seltenes Fossil"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Play this card as if it were a 70-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play.\n\nThis card can't be affected by any Special Conditions, and it can't retreat.",
		fr: "Jouez cette carte comme si c'était un Pokémon Colorless de base avec 70 PV. N'importe quand pendant votre tour, vous pouvez défausser cette carte du jeu.\n\nCette carte ne peut être affectée par aucun État Spécial, et elle ne peut pas battre en retraite.",
		es: "Juega esta carta como si fuera un Pokémon Colorless Básico de 70 PS. En cualquier momento durante tu turno, puedes descartar esta carta del juego.\n\nEsta carta\n\nno puede verse afectada por ninguna Condición Especial y no puede retirarse.",
		it: "Gioca questa carta come se fosse un Pokémon Base Colorless con 70 PS. Durante il tuo turno, in qualsiasi momento, puoi scartare questa carta dal gioco.\n\nQuesta carta non può essere influenzata da condizioni speciali e non può ritirarsi.",
		pt: "Jogue esta carta como se fosse um Pokémon Colorless Básico com PS 70. A qualquer momento, durante o seu turno, você poderá descartar esta carta do jogo.\n\nEsta carta não pode ser afetada por quaisquer Condições Especiais e não pode recuar.",
		de: "Spiele diese Karte, als ob sie ein Basis-Colorless-Pokémon mit 70 KP wäre. Du kannst diese Karte jederzeit während deines Zuges aus dem Spiel nehmen und auf deinen Ablagestapel legen.\n\nDiese Karte kann von keinen Speziellen Zuständen betroffen werden und sich nicht zurückziehen."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 70
}

export default card
