import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		en: "Tauros",
		fr: "Tauros",
		es: "Tauros",
		it: "Tauros",
		pt: "Tauros",
		de: "Tauros"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			es: "Patada Destrucción",
			it: "Calcio Esplosivo",
			pt: "Chute Poderoso",
			de: "Schmetterkick"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Adrena-Tackle",
			fr: "Adréna-Charge",
			es: "Placaje Adrenalina",
			it: "Azione Adrenalinica",
			pt: "Investida de Adrenalina",
			de: "Adrena-Tackle"
		},

		effect: {
			en: "If this Pokémon has no damage counters on it, this attack does nothing.",
			fr: "Si ce Pokémon n'a aucun marqueur de dégâts, cette attaque ne fait rien.",
			es: "Si este Pokémon no tiene ningún contador de daño sobre él, este ataque no hace nada.",
			it: "Se questo Pokémon non ha segnalini danno, questo attacco non ha effetto.",
			pt: "Se este Pokémon não tiver nenhum contador de dano nele, este ataque não fará nada.",
			de: "Wenn auf diesem Pokémon keine Schadensmarken liegen, hat diese Attacke keine Auswirkungen."
		}
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card