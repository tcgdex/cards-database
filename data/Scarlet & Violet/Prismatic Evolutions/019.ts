import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [199],
	set: Set,

	name: {
		en: "Slowking",
		fr: "Roigada",
		es: "Slowking",
		pt: "Slowking",
		it: "Slowking",
		de: "Laschoking"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
		es: "Slowpoke",
		pt: "Slowpoke",
		it: "Slowpoke",
		de: "Flegmon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Wash the Slate Clean",
			fr: "Table Rase",
			es: "Borrón y Cuenta Nueva",
			pt: "Águas Passadas",
			it: "Colpo di Spugna",
			de: "Reinen Tisch machen"
		},

		effect: {
			en: "You may put 2 Energy attached to your opponent's Active Pokémon into their hand.",
			fr: "Vous pouvez ajouter à la main de votre adversaire 2 Énergies attachées à son Pokémon Actif.",
			es: "Puedes poner 2 Energías unidas al Pokémon Activo de tu rival en su mano.",
			pt: "Você pode colocar 2 Energias ligadas ao Pokémon Ativo do seu oponente na mão dele.",
			it: "Puoi prendere due Energie assegnate al Pokémon attivo del tuo avversario e aggiungerle alle carte che ha in mano.",
			de: "Du kannst deinem Gegner 2 an sein Aktives Pokémon angelegte Energien auf seine Hand geben."
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "Oswaldo KATO",

	thirdParty: {
		cardmarket: 805408
	}
}

export default card