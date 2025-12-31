import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [685],
	set: Set,

	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
		es: "Slurpuff",
		it: "Slurpuff",
		pt: "Slurpuff",
		de: "Sabbaione"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
		es: "Swirlix",
		it: "Swirlix",
		pt: "Swirlix",
		de: "Flauschling"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Slurp Slurp",
			fr: "Slurp Slurp",
			es: "Sorbo a Sorbo",
			it: "Slurp Slurp",
			pt: "Lambança",
			de: "Sabber-Sabber"
		},

		effect: {
			en: "Flip 2 coins. This attack does 90 damage for each heads. If both of them are tails,  your opponent's Active Pokémon is now Confused.",
			fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face. Si vous obtenez deux côtés pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara. Si sale cruz en ambas, el Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa. Se esce entrambe le volte croce, il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara. Se as duas saírem coroa, o Pokémon Ativo do seu oponente agora estará Confuso.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu. Zeigen beide Münzen Zahl, ist das Aktive Pokémon deines Gegners jetzt verwirrt."
		},

		damage: "90×"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "mingo",

	thirdParty: {
		cardmarket: 769264
	}
}

export default card