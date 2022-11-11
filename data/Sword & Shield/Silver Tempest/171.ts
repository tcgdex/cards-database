import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Chesnaught V",
		fr: "Blindépique V",
		es: "Chesnaught V",
		it: "Chesnaught V",
		pt: "Chesnaught V",
		de: "Brigaron V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Needle Line",
			fr: "Ligne Piquante",
			es: "Línea de Espinas",
			it: "Linea Acuminata",
			pt: "Linha de Agulhas",
			de: "Nadellinie"
		},

		effect: {
			en: "If your Active Chesnaught V is damaged by an attack from your opponent's Pokémon (even if it is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
			fr: "Si le Blindépique-V sur votre Poste Actif subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même s'il est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
			es: "Si tu Chesnaught V Activo resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
			it: "Se il tuo Chesnaught-V attivo viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante.",
			pt: "Se o seu Chesnaught V Ativo for danificado por um ataque dos Pokémon do seu oponente (mesmo que ele seja Nocauteado), coloque 3 contadores de dano no Pokémon Atacante.",
			de: "Wenn dein Aktives Brigaron-V durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Touchdown",
			fr: "Touchdown",
			es: "Gol",
			it: "Meta",
			pt: "Aterrissagem",
			de: "Touchdown"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 130
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card