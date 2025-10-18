import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Shedinja",
		fr: "Munja",
		de: "Ninjatom",
		it: "Shedinja",
		es: "Shedinja",
		pt: "Shedinja",
		'es-mx': "Shedinja"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [292],

	abilities: [{
		type: "Ability",

		name: {
			en: "Fragile Husk",
			fr: "Enveloppe Fragile",
			de: "Brüchige Hülle",
			it: "Involucro Fragile",
			es: "Caparazón Frágil",
			pt: "Casca Fraca",
			'es-mx': "Caparazón Frágil"
		},

		effect: {
			en: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon ex, your opponent can't take any Prize cards for it.",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de l'un des Pokémon-ex de votre adversaire, votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon-ex deines Gegners kampfunfähig wird, kann dein Gegner dafür keine Preiskarten nehmen.",
			it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon-ex del tuo avversario, il tuo avversario non può prendere carte Premio per effetto di quel KO.",
			es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon ex de tu rival, tu rival no puede coger ninguna carta de Premio por ello.",
			pt: "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon ex do seu oponente, seu oponente não poderá pegar cartas de Prêmio por isso.",
			'es-mx': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon ex de tu rival, tu rival no puede tomar ninguna carta de Premio por ello."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Damage Beat",
			fr: "Rouste Ravageuse",
			de: "Heftige Prügel",
			it: "Battidanni",
			es: "Toque Dañino",
			pt: "Pancada Destruidora",
			'es-mx': "Golpeteo Dañino"
		},

		effect: {
			en: "This attack does 20 damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 20 Schadenspunkte zu.",
			it: "Questo attacco infligge 20 danni per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			es: "Este ataque hace 20 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
			pt: "Este ataque causa 20 pontos de dano para cada contador de dano no Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival."
		},

		damage: "20×"
	}],

	retreat: 0,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654483
	}
}

export default card