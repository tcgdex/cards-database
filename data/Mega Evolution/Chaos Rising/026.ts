import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Golisopod",
		fr: "Sarmuraï",
		es: "Golisopod",
		'es-mx': "Golisopod",
		de: "Tectass",
		it: "Golisopod",
		pt: "Golisopod"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [768],
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Wimpod"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Critical Slash",
			fr: "Tranche Critique",
			es: "Cuchillada Crítica",
			'es-mx': "Cuchillada Crítica",
			de: "Kritischer Schlitzer",
			it: "Lacerazione Devastante",
			pt: "Corte Crítico"
		},

		cost: ["Water"],
		damage: 30,

		effect: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, pendant le prochain tour de votre adversaire, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon.",
			es: "Si un Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'es-mx': "Si el Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			de: "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			it: "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon."
		}
	}, {
		name: {
			en: "Boundless Power",
			fr: "Puissance Illimitée",
			es: "Poder Ilimitado",
			'es-mx': "Poder Ilimitado",
			de: "Unbegrenzte Kraft",
			it: "Potere Incontenibile",
			pt: "Poder Ilimitado"
		},

		cost: ["Colorless", "Colorless", "Colorless"],
		damage: 150,

		effect: {
			en: "During your next turn, this Pokémon can't use attacks.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar ataques."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693494
	}
}

export default card