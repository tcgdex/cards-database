import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Jynx",
		fr: "Lippoutou",
		es: "Jynx",
		it: "Jynx",
		pt: "Jynx",
		de: "Rossana"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Selfish Lips",
			fr: "Lèvres Égoïstes",
			es: "Labios Egoístas",
			it: "Labbra Egoiste",
			pt: "Lábios Egoístas",
			de: "Ego-Lippen"
		},

		effect: {
			en: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon V, your opponent can't take any Prize cards for it.",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque d'un Pokémon-V de votre adversaire, ce dernier ne peut pas récupérer de carte Récompense pour ce Pokémon.",
			es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon V de tu rival, tu rival no puede coger ninguna carta de Premio por ello.",
			it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon-V del tuo avversario, il tuo avversario non può prendere carte Premio per effetto di quel KO.",
			pt: "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon V do seu oponente, seu oponente não poderá pegar cartas de Prêmio por isto.",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon-V deines Gegners kampfunfähig wird, kann dein Gegner dafür keine Preiskarten nehmen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Psychic Assault",
			fr: "Assaut Psychique",
			es: "Asalto Psíquico",
			it: "Psicoassalto",
			pt: "Ataque Psíquico",
			de: "Psycho-Ansturm"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card