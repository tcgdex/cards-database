import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Corayôme de Galar",
		en: "Galarian Cursola",
		es: "Cursola de Galar",
		it: "Cursola di Galar",
		pt: "Cursola de Galar",
		de: "Galar-Gorgasonn"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Corayon de Galar",
		en: "Galarian Corsola"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Corps Condamné",
			en: "Perish Body",
			es: "Cuerpo Mortal",
			it: "Ultimotocco",
			pt: "Corpo Perecido",
			de: "Unheilskörper"
		},

		effect: {
			fr: "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque de votre adversaire, lancez une pièce. Si c'est face, le Pokémon Attaquant est mis K.O.",
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an opponent's attack, flip a coin. If heads, the Attacking Pokémon is Knocked Out.",
			es: "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de tu rival, lanza 1 moneda. Si sale cara, el Pokémon Atacante queda Fuera de Combate.",
			it: "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco dell'avversario, lancia una moneta. Se esce testa, il Pokémon attaccante viene messo KO.",
			pt: "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque do seu oponente, jogue 1 moeda. Se sair cara, o Pokémon Atacante será Nocauteado.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke deines Gegners kampfunfähig wird, wirf 1 Münze. Bei Kopf ist das Angreifende Pokémon kampfunfähig."
		}
	}],

	attacks: [{
		name: {
			fr: "Coinçage",
			en: "Corner",
			es: "Arrinconar",
			it: "Trappola",
			pt: "Quina",
			de: "Bedrängen"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "Its shell is overflowing with its heightened otherworldly energy. The ectoplasm serves as protection for this Pokémon's core spirit."
	}
}

export default card
