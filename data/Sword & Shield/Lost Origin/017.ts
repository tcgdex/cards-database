import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [709],
	set: Set,

	name: {
		en: "Trevenant",
		fr: "Desséliande",
		es: "Trevenant",
		it: "Trevenant",
		pt: "Trevenant",
		de: "Trombork"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme",
		es: "Phantump",
		it: "Phantump",
		pt: "Phantump",
		de: "Paragoni"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Elder Tree Barrier",
			fr: "Barrière Vieillarbre",
			es: "Barrera Árbol Viejo",
			it: "Barriera Alberantico",
			pt: "Barreira da Árvore Anciã",
			de: "Urgehölzbarriere"
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
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
			es: "Gigaimpacto",
			it: "Gigaimpatto",
			pt: "Gigaimpacto",
			de: "Gigastoß"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card
