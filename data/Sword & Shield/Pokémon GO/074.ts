import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Conkeldurr V",
		fr: "Bétochef V",
		es: "Conkeldurr V",
		it: "Conkeldurr V",
		pt: "Conkeldurr V",
		de: "Meistagrif V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Counter",
			fr: "Riposte",
			es: "Contraataque",
			it: "Contrattacco",
			pt: "Contra-atacar",
			de: "Konter"
		},

		effect: {
			en: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage.",
			fr: "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts.",
			es: "Si este Pokémon resultó dañado por un ataque durante el último turno de tu rival, este ataque hace ese número de puntos de daño más.",
			it: "Se questo Pokémon è stato danneggiato da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge altrettanti danni in più.",
			pt: "Se este Pokémon tiver sido danificado por um ataque durante o último turno do seu oponente, este ataque causará a mesma quantidade de dano a mais.",
			de: "Wenn diesem Pokémon während des letzten Zuges deines Gegners durch eine Attacke Schaden zugefügt wurde, fügt diese Attacke genauso viel Schaden mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Dynamic Punch",
			fr: "Dynamo-Poing",
			es: "Puño Dinámico",
			it: "Dinamipugno",
			pt: "Soco Dinâmico",
			de: "Wuchtschlag"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 90 more damage, and your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 90 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 90 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 90 danni in più e il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 90 pontos de dano a mais e o Pokémon Ativo do seu oponente ficará Confuso.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 90 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: "90+"
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card