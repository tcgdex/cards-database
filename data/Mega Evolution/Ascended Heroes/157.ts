import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Noivern",
		fr: "Bruyverne",
		es: "Noivern",
		'es-mx': "Noivern",
		de: "UHaFnir",
		it: "Noivern",
		pt: "Noivern"
	},

	illustrator: "Natsumi Miyanose",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Stage1",
	dexId: [715],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Agility",
			fr: "Hâte",
			es: "Agilidad",
			'es-mx': "Agilidad",
			de: "Agilität",
			it: "Agilità",
			pt: "Agilidade"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon."
		},

		damage: 40
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			en: "Enhanced Blade",
			fr: "Lame Améliorée",
			es: "Tajo Mejorado",
			'es-mx': "Cuchilla Mejorada",
			de: "Verstärkte Klinge",
			it: "Superlama",
			pt: "Espada Melhorada"
		},

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 70 more damage.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Si este Pokémon tiene una Herramienta Pokémon unida, este ataque hace 70 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene alguna Herramienta Pokémon unida, este ataque hace 70 puntos de daño más.",
			de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 70 danni in più.",
			pt: "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 70 pontos de dano a mais."
		},

		damage: "70+"
	}],

	retreat: 0,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675969,
		cardmarket: 869768
	}
}

export default card