import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		en: "Paldean Tauros",
		fr: "Tauros de Paldea",
		es: "Tauros de Paldea",
		it: "Tauros di Paldea",
		pt: "Tauros de Paldea",
		de: "Paldea-Tauros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Upthrusting Horns",
			fr: "Cornes Renversantes",
			es: "Cornada Ascendente",
			it: "Sollevacorna",
			pt: "Chifrada",
			de: "Hörnerstoß"
		},

		effect: {
			en: "You may put 2 Energy attached to your opponent's Active Stage 2 Pokémon into their hand.",
			fr: "Vous pouvez ajouter à la main de votre adversaire 2 Énergies attachées à son Pokémon Actif de Niveau 2.",
			es: "Puedes poner 2 Energías unidas al Pokémon de Fase 2 Activo de tu rival en su mano.",
			it: "Puoi prendere due Energie assegnate al Pokémon di Fase 2 attivo del tuo avversario e aggiungerle alle carte che ha in mano.",
			pt: "Você pode colocar 2 Energias ligadas ao Pokémon Estágio 2 Ativo do seu oponente na mão dele.",
			de: "Du kannst deinem Gegner 2 an sein Aktives Phase-2-Pokémon angelegte Energien auf seine Hand geben."
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Jet Headbutt",
			fr: "Bélier Volant",
			es: "Turbocabezazo",
			it: "Zuccata Jet",
			pt: "Cabeçada a Jato",
			de: "Flinke Kopfnuss"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "toi8",

	thirdParty: {
		cardmarket: 794305
	}
}

export default card
