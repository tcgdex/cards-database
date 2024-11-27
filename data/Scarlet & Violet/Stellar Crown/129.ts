import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Antique Cover Fossil",
		fr: "Fossile Plaque Ancien",
		es: "Fósil Tapa Antiguo",
		it: "Vecchio Fossiltappo",
		pt: "Fóssil Casca Arcaico",
		de: "Antikes Schildfossil"
	},

	rarity: "Common",
	category: "Trainer",
	hp: 60,

	abilities: [{
		type: "Ability",

		name: {
			en: "Protective Cover",
			fr: "Plaque Protectrice",
			es: "Tapa Protectora",
			it: "Tappo Protettivo",
			pt: "Casca Protetora",
			de: "Schutzabdeckung"
		},

		effect: {
			en: "Prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			fr: "Évitez tous les effets infligés à ce Pokémon provenant des attaques utilisées par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			es: "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon. (El daño no es un efecto).",
			it: "Previeni tutti gli effetti inflitti a questo Pokémon dagli attacchi usati dai Pokémon del tuo avversario. I danni non sono un effetto.",
			pt: "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)",
			de: "Verhindere alle Effekte der von Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		}
	}],

	effect: {
		en: "Play this card as if it were a 60-HP Basic Colorless Pokémon. This card can't be affected by any Special Conditions and can't retreat.\n\nAt any time during your turn, you may discard this card from play.",
		fr: "Jouez cette carte comme si c'était un Pokémon Colorless de base avec 60 PV. Cette carte ne peut être affectée par aucun État Spécial et ne peut pas battre en retraite.\nÀ tout moment pendant votre tour, vous pouvez défausser cette carte du jeu.",
		es: "Juega esta carta como si fuera un Pokémon Colorless Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego.",
		it: "Gioca questa carta come se fosse un Pokémon Base Colorless con 60 PS. Questa carta non può essere influenzata da condizioni speciali e non può ritirarsi.\nDurante il tuo turno, in qualsiasi momento, puoi scartare questa carta dal gioco.",
		pt: "Jogue esta carta como se fosse um Pokémon Colorless Básico com PS 60. Esta carta não pode ser afetada por quaisquer Condições Especiais e não pode recuar.\nA qualquer momento durante o seu turno, você poderá descartar esta carta do jogo.",
		de: "Spiele diese Karte, als ob sie ein Basis-Colorless-Pokémon mit 60 KP wäre. Diese Karte kann von keinen Speziellen Zuständen betroffen werden und sich nicht zurückziehen.\nDu kannst diese Karte jederzeit während deines Zuges aus dem Spiel nehmen und auf deinen Ablagestapel legen."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
