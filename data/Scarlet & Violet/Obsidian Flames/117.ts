import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		fr: "Lougaroc",
		en: "Lycanroc",
		es: "Lycanroc",
		it: "Lycanroc",
		pt: "Lycanroc",
		de: "Wolwerock"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Croc Finisseur",
			en: "Finishing Fang",
			es: "Colmillo Definitivo",
			it: "Zannata di Grazia",
			pt: "Presa Arrematadora",
			de: "Finale Fänge"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire n'a aucun marqueur de dégâts avant que cette attaque n'inflige des dégâts, cette attaque ne fait rien.",
			en: "If your opponent's Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
			es: "Si el Pokémon Activo de tu rival no tiene ningún contador de daño sobre él antes de que este ataque inflija daño, este ataque no hace nada.",
			it: "Se il Pokémon attivo del tuo avversario non ha segnalini danno prima che questo attacco infligga danni, questo attacco non ha effetto.",
			pt: "Se o Pokémon Ativo do seu oponente não tiver nenhum contador de dano nele antes deste ataque causar dano, este ataque não fará nada.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners keine Schadensmarken liegen, bevor diese Attacke Schaden zufügt, hat diese Attacke keine Auswirkungen."
		},

		damage: 90
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Griffe Taillante",
			en: "Slashing Claw",
			es: "Garra Cuchillazo",
			it: "Artigli Laceranti",
			pt: "Garra Cortadora",
			de: "Schlitzende Klaue"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card