import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Kirlia",
		fr: "Kirlia",
		es: "Kirlia",
		it: "Kirlia",
		pt: "Kirlia"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			it: "Magicolpo",
			pt: "Tiro Mágico"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psychic",
			fr: "Psyko",
			es: "Psíquico",
			it: "Psichico",
			pt: "Psíquico"
		},

		effect: {
			en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente."
		},

		damage: "60+"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card