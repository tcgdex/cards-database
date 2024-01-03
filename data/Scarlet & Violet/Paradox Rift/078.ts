import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Gourgeist",
		fr: "Banshitrouye",
		es: "Gourgeist",
		it: "Gourgeist",
		pt: "Gourgeist",
		de: "Pumpdjinn"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Startling Pumpkin",
			fr: "Citrouille Surprise",
			es: "Calabaza Sorprendente",
			it: "Zuccaspavento",
			pt: "Abóbora Assustadora",
			de: "Kürbisschreck"
		},

		effect: {
			en: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, discard 2 random cards from your opponent's hand.",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, défaussez 2 cartes au hasard de la main de votre adversaire.",
			es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, descarta 2 cartas aleatorias de la mano de tu rival.",
			it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, scarta due carte a caso dalla mano del tuo avversario.",
			pt: "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, descarte 2 cartas aleatórias da mão do seu oponente.",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, lege 2 zufällige Karten aus der Hand deines Gegners auf seinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Shadow Bind",
			fr: "Étreinte d'Ombre",
			es: "Atadura Sombría",
			it: "Legami d'Ombra",
			pt: "Aprisionamento Sombrio",
			de: "Schattenbindung"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card