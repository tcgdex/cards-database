import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [330],
	set: Set,

	name: {
		en: "Flygon",
		fr: "Libégon",
		es: "Flygon",
		it: "Flygon",
		pt: "Flygon",
		de: "Libelldra"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
		es: "Vibrava",
		it: "Vibrava",
		pt: "Vibrava",
		de: "Vibrava"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Desert Pillar",
			fr: "Pilier du Désert",
			es: "Columna del Desierto",
			it: "Pilastro del Deserto",
			pt: "Coluna do Deserto",
			de: "Wüstensäule"
		},

		effect: {
			en: "This attack does 50 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 50 danni per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Blasting Wind",
			fr: "Vent Impitoyable",
			es: "Vientos Explosivos",
			it: "Vento Distruttivo",
			pt: "Vendaval Avassalador",
			de: "Peitschender Wind"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608526,
		tcgplayer: 263792
	}
}

export default card