import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Marshadow",
		fr: "Marshadow",
		de: "Marshadow",
		it: "Marshadow",
		es: "Marshadow",
		pt: "Marshadow",
		'es-mx': "Marshadow"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Shadowy Side Kick",
			fr: "Coup Latéral Obscur",
			de: "Verborgener Seitentritt",
			it: "Ombracalcio Laterale",
			es: "Patada Sombra Lateral",
			pt: "Chute Lateral Sombrio",
			'es-mx': "Patada Lateral Sombría"
		},

		effect: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, pendant le prochain tour de votre adversaire, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon.",
			de: "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			it: "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			es: "Si un Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			pt: "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'es-mx': "Si el Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654419
	}
}

export default card