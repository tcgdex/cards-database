import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [199],
	set: Set,

	name: {
		'en-us': "Slowking",
		'fr-fr': "Roigada",
		'es-es': "Slowking",
		'pt-br': "Slowking",
		'it-it': "Slowking",
		'de-de': "Laschoking"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'pt-br': "Slowpoke",
		'it-it': "Slowpoke",
		'de-de': "Flegmon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Wash the Slate Clean",
			'fr-fr': "Table Rase",
			'es-es': "Borrón y Cuenta Nueva",
			'pt-br': "Águas Passadas",
			'it-it': "Colpo di Spugna",
			'de-de': "Reinen Tisch machen"
		},

		effect: {
			'en-us': "You may put 2 Energy attached to your opponent's Active Pokémon into their hand.",
			'fr-fr': "Vous pouvez ajouter à la main de votre adversaire 2 Énergies attachées à son Pokémon Actif.",
			'es-es': "Puedes poner 2 Energías unidas al Pokémon Activo de tu rival en su mano.",
			'pt-br': "Você pode colocar 2 Energias ligadas ao Pokémon Ativo do seu oponente na mão dele.",
			'it-it': "Puoi prendere due Energie assegnate al Pokémon attivo del tuo avversario e aggiungerle alle carte che ha in mano.",
			'de-de': "Du kannst deinem Gegner 2 an sein Aktives Pokémon angelegte Energien auf seine Hand geben."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Oswaldo KATO",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805408,
				tcgplayer: 610374
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805408,
				tcgplayer: 610374
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806434,
				tcgplayer: 610549
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806435,
				tcgplayer: 610650
			}
		},
	],
}

export default card
