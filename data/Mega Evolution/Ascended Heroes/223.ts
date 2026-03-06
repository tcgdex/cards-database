import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Numel",
		fr: "Chamallot",
		es: "Numel",
		'es-mx': "Numel",
		de: "Camaub",
		it: "Numel",
		pt: "Numel"
	},

	illustrator: "Yoshimi Miyoshi",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [322],

	abilities: [{
		type: "Ability",

		name: {
			en: "Incandescent Body",
			fr: "Corps Incandescent",
			es: "Cuerpo Incandescente",
			'es-mx': "Cuerpo Incandescente",
			de: "Innere Weißglut",
			it: "Corpo Incandescente",
			pt: "Corpo Incandescente"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), el Pokémon Atacante pasa a estar Quemado.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), el Pokémon Atacante ahora está Quemado.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene bruciato.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante agora estará Queimado."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			'es-mx': "Combustión",
			de: "Glühen",
			it: "Fuoco Continuo",
			pt: "Combustão"
		},

		damage: 20
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 676035,
		cardmarket: 869834
	}
}

export default card
