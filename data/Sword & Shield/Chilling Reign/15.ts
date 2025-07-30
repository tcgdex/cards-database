import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [763],
	set: Set,

	name: {
		en: "Tsareena",
		fr: "Sucreine",
		es: "Tsareena",
		it: "Tsareena",
		pt: "Tsareena",
		de: "Fruyal"
	},

	illustrator: "Yuu Nishida",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Steenee",
		fr: "Candine",
		es: "Steenee",
		it: "Steenee",
		pt: "Steenee",
		de: "Frubaila"
	},

	attacks: [{
		name: {
			en: "Tread On",
			fr: "Piétinement",
			es: "Patear",
			it: "Calpestare",
			pt: "Pisão",
			de: "Zertreten"
		},

		effect: {
			en: "This attack does 50 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 50 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			es: "Rayo Solar",
			it: "Solarraggio",
			pt: "Raio Solar",
			de: "Solarstrahl"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "A kick from the hardened tips of this Pokémon's legs leaves a wound in the opponent's body and soul that will never heal."
	},

	thirdParty: {
		cardmarket: 567095
	}
}

export default card
