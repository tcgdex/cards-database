import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Corvaillus",
		en: "Corviknight",
		es: "Corviknight",
		it: "Corviknight",
		pt: "Corviknight",
		de: "Krarmor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],
	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			fr: "Accélérer",
			en: "Accelerate",
			es: "Acelerar",
			it: "Accelerazione",
			pt: "Aceleração",
			de: "Beschleunigen"
		},

		effect: {
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts provenant de cette attaque, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			es: "Si un Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			it: "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			de: "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 50
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			fr: "Oiseau Torpille",
			en: "Spinning Bird",
			es: "Pájaro Giratorio",
			it: "Giravolatile",
			pt: "Ave Giratória",
			de: "Vogelwirbel"
		},

		effect: {
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			en: "Discard 2 Energy from this Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card