import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Floréclat",
		en: "Glimmora",
		es: "Glimmora",
		it: "Glimmora",
		pt: "Glimmora",
		de: "Lumiflora"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Cristal Brisant",
			en: "Shattering Crystal",
			es: "Cristal Demoledor",
			it: "Cristallo Frangente",
			pt: "Estilhaçar Cristalino",
			de: "Zersplitternder Kristall"
		},

		effect: {
			fr: "Quand ce Pokémon est mis K.O., lancez une pièce. Si c'est face, votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
			en: "When this Pokémon is Knocked Out, flip a coin. If heads, your opponent can't take any Prize cards for it.",
			es: "Cuando este Pokémon queda Fuera de Combate, lanza 1 moneda. Si sale cara, tu rival no puede coger ninguna carta de Premio por ello.",
			it: "Quando questo Pokémon viene messo KO, lancia una moneta. Se esce testa, il tuo avversario non può prendere carte Premio per effetto di quel KO.",
			pt: "Quando este Pokémon for Nocauteado, jogue uma moeda. Se sair cara, seu oponente não poderá pegar cartas de Prêmio por isto.",
			de: "Wenn dieses Pokémon kampfunfähig wird, wirf 1 Münze. Bei Kopf kann dein Gegner dafür keine Preiskarten nehmen."
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Pétales Poison",
			en: "Poison Petals",
			es: "Pétalos Veneno",
			it: "Petali Velenosi",
			pt: "Pétalas Venenosas",
			de: "Giftblüten"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 6 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 6 damage counters on that Pokémon instead of 1.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 6 contadores de daño en vez de uno en ese Pokémon.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Metti sei segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 6 contadores de dano ao invés de 1 naquele Pokémon.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 6 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		}
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card