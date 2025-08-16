import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [73],
	set: Set,

	name: {
		fr: "Tentacruel",
		en: "Tentacruel",
		es: "Tentacruel",
		it: "Tentacruel",
		pt: "Tentacruel",
		de: "Tentoxa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Fouet Empoisonné",
			en: "Poisonous Whip",
			es: "Látigo Venenoso",
			it: "Frustata Velenosa",
			pt: "Chicote Venenoso",
			de: "Giftpeitsche"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			en: "Your opponent's Active Pokémon is now Poisoned.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Panique Tentaculaire",
			en: "Tentacular Panic",
			es: "Pánico Tentacular",
			it: "Panico Tentacolare",
			pt: "Tentáculo do Pânico",
			de: "Tentakelpanik"
		},

		effect: {
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 90 dégâts pour chaque côté face. Si le premier lancer est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
			en: "Flip a coin until you get tails. This attack does 90 damage for each heads. If the first flip is tails, your opponent's Active Pokémon is now Confused.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 90 puntos de daño por cada cara. Si sale cruz en el primer lanzamiento, el Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 90 danni ogni volta che esce testa. Se la prima volta esce croce, il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 90 pontos de dano para cada cara. Se a primeira jogada sair coroa, o Pokémon Ativo do seu oponente agora estará Confuso.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu. Wenn der erste Münzwurf Zahl zeigt, ist das Aktive Pokémon deines Gegners jetzt verwirrt."
		},

		damage: "90×"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "miki kudo",

	thirdParty: {
		cardmarket: 733668
	}
}

export default card