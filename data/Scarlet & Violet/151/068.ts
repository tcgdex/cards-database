import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [68],
	set: Set,

	name: {
		fr: "Mackogneur",
		en: "Machamp",
		es: "Machamp",
		it: "Machamp",
		pt: "Machamp",
		de: "Machomei"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Cran",
			en: "Guts",
			es: "Agallas",
			it: "Dentistretti",
			pt: "Tenacidade",
			de: "Adrenalin"
		},

		effect: {
			fr: "Si ce Pokémon doit être mis K.O. par les dégâts d'une attaque, lancez une pièce. Si c'est face, ce Pokémon n'est pas mis K.O. et il lui reste 10 PV.",
			en: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out, and its remaining HP becomes 10.",
			es: "Si este Pokémon fuese a quedar Fuera de Combate por el daño de un ataque, lanza 1 moneda. Si sale cara, este Pokémon no queda Fuera de Combate, y sus PS restantes pasan a ser 10.",
			it: "Se questo Pokémon sta per essere messo KO dai danni di un attacco, lancia una moneta. Se esce testa, il Pokémon non viene messo KO e i suoi PS rimanenti diventano 10.",
			pt: "Se este Pokémon estiver prestes a ser Nocauteado pelo dano de um ataque, jogue uma moeda. Se sair cara, este Pokémon não será Nocauteado e o PS restante dele será 10.",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke kampfunfähig würde, wirf 1 Münze. Bei Kopf wird dieses Pokémon nicht kampfunfähig und seine verbleibenden KP sind gleich 10."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Découpe-Montagnes",
			en: "Mountain Chopping",
			es: "Tajo Montaña",
			it: "Tagliamonte",
			pt: "Fenda Montanhosa",
			de: "Bergspalter"
		},

		effect: {
			fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			en: "Discard the top 2 cards of your opponent's deck.",
			es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
			it: "Scarta le prime due carte del mazzo del tuo avversario.",
			pt: "Descarte as 2 cartas de cima do baralho do seu oponente.",
			de: "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	}
}

export default card
