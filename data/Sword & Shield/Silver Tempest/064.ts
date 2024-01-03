import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Mismagius",
		fr: "Magirêve",
		es: "Mismagius",
		it: "Mismagius",
		pt: "Mismagius",
		de: "Traunmagil"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforêve",
		es: "Misdreavus",
		it: "Misdreavus",
		pt: "Misdreavus",
		de: "Traunfugil"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Spiteful Magic",
			fr: "Magie Malveillante",
			es: "Magia Malévola",
			it: "Incantesimo Dispettoso",
			pt: "Magia Rancorosa",
			de: "Magische Vergeltung"
		},

		effect: {
			en: "If this Pokémon has full HP and is Knocked Out by damage from an attack from your opponent's Pokémon, put 8 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon a tous ses PV et est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
			es: "Si este Pokémon tiene todos sus PS y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, pon 8 contadores de daño en el Pokémon Atacante.",
			it: "Se questo Pokémon ha tutti i PS e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, metti otto segnalini danno sul Pokémon attaccante.",
			pt: "Se este Pokémon tiver PS cheio e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, coloque 8 contadores de dano no Pokémon Atacante.",
			de: "Wenn dieses Pokémon volle KP hat und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, lege 8 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Eerie Voice",
			fr: "Voix Lugubre",
			es: "Voz Espeluznante",
			it: "Vocemistero",
			pt: "Voz Misteriosa",
			de: "Schaurige Stimme"
		},

		effect: {
			en: "Put 2 damage counters on each of your opponent's Pokémon.",
			fr: "Placez 2 marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
			es: "Pon 2 contadores de daño en cada uno de los Pokémon de tu rival.",
			it: "Metti due segnalini danno su ciascuno dei Pokémon del tuo avversario.",
			pt: "Coloque 2 contadores de dano em cada um dos Pokémon do seu oponente.",
			de: "Lege 2 Schadensmarken auf jedes Pokémon deines Gegners."
		}
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card