import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		'en-us': "Paldean Tauros",
		'fr-fr': "Tauros de Paldea",
		'es-es': "Tauros de Paldea",
		'it-it': "Tauros di Paldea",
		'pt-br': "Tauros de Paldea",
		'de-de': "Paldea-Tauros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Upthrusting Horns",
			'fr-fr': "Cornes Renversantes",
			'es-es': "Cornada Ascendente",
			'it-it': "Sollevacorna",
			'pt-br': "Chifrada",
			'de-de': "Hörnerstoß"
		},

		effect: {
			'en-us': "You may put 2 Energy attached to your opponent's Active Stage 2 Pokémon into their hand.",
			'fr-fr': "Vous pouvez ajouter à la main de votre adversaire 2 Énergies attachées à son Pokémon Actif de Niveau 2.",
			'es-es': "Puedes poner 2 Energías unidas al Pokémon de Fase 2 Activo de tu rival en su mano.",
			'it-it': "Puoi prendere due Energie assegnate al Pokémon di Fase 2 attivo del tuo avversario e aggiungerle alle carte che ha in mano.",
			'pt-br': "Você pode colocar 2 Energias ligadas ao Pokémon Estágio 2 Ativo do seu oponente na mão dele.",
			'de-de': "Du kannst deinem Gegner 2 an sein Aktives Phase-2-Pokémon angelegte Energien auf seine Hand geben."
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Jet Headbutt",
			'fr-fr': "Bélier Volant",
			'es-es': "Turbocabezazo",
			'it-it': "Zuccata Jet",
			'pt-br': "Cabeçada a Jato",
			'de-de': "Flinke Kopfnuss"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794305,
				tcgplayer: 590015
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794305,
				tcgplayer: 590015
			}
		},
	],

	illustrator: "toi8",
}

export default card
