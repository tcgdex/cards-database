import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It will do anything to win, taking advantage of every opening and finishing opponents off with the small claws on its front legs.",
	},


	name: {
		'en-us': "Golisopod",
		'fr-fr': "Sarmuraï",
		'es-es': "Golisopod",
		'es-mx': "Golisopod",
		'de-de': "Tectass",
		'it-it': "Golisopod",
		'pt-br': "Golisopod"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [768],
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Wimpod"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Critical Slash",
			'fr-fr': "Tranche Critique",
			'es-es': "Cuchillada Crítica",
			'es-mx': "Cuchillada Crítica",
			'de-de': "Kritischer Schlitzer",
			'it-it': "Lacerazione Devastante",
			'pt-br': "Corte Crítico"
		},

		cost: ["Water"],
		damage: 30,

		effect: {
			'en-us': "If your opponent's Pokémon is Knocked Out by damage from this attack, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, pendant le prochain tour de votre adversaire, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon.",
			'es-es': "Si un Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'es-mx': "Si el Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'de-de': "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			'it-it': "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon."
		}
	}, {
		name: {
			'en-us': "Boundless Power",
			'fr-fr': "Puissance Illimitée",
			'es-es': "Poder Ilimitado",
			'es-mx': "Poder Ilimitado",
			'de-de': "Unbegrenzte Kraft",
			'it-it': "Potere Incontenibile",
			'pt-br': "Poder Ilimitado"
		},

		cost: ["Colorless", "Colorless", "Colorless"],
		damage: 150,

		effect: {
			'en-us': "During your next turn, this Pokémon can't use attacks.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar ataques."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886418,
				tcgplayer: 693494
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886418,
				tcgplayer: 693494
			}
		},
	],
}

export default card
