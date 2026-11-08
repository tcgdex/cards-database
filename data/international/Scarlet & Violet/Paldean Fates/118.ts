import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [120],
	set: Set,

	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'es-es': "Staryu",
		'it-it': "Staryu",
		'pt-br': "Staryu",
		'de-de': "Sterndu"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Swift",
			'fr-fr': "Météores",
			'es-es': "Meteoros",
			'it-it': "Comete",
			'pt-br': "Ataque Veloz",
			'de-de': "Sternschauer"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia, o por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751657,
				tcgplayer: 534508,
				cardtrader: 274302
			}
		},
	],

	illustrator: "Nisota Niso",

	description: {
		'en-us': "Fish Pokémon nibble at it, but Staryu isn't bothered. Its body regenerates quickly, even if part of it is completely torn off.",
	},

}

export default card
