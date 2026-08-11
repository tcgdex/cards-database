import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [308],
	set: Set,

	name: {
		'en-us': "Medicham ex",
		'fr-fr': "Charmina-ex",
		'es-es': "Medicham ex",
		'it-it': "Medicham-ex",
		'pt-br': "Medicham ex",
		'de-de': "Meditalis-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'pt-br': "Meditite",
		'de-de': "Meditie"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Chi-Atsu",
			'fr-fr': "Chi-Atsu",
			'es-es': "Qi-Atsu",
			'it-it': "Chi-Atsu",
			'pt-br': "Chi-Atsu",
			'de-de': "Chi-Atsu"
		},

		effect: {
			'en-us': "Put damage counters on your opponent's Active Pokémon until its remaining HP is 50.",
			'fr-fr': "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ne lui reste que 50 PV.",
			'es-es': "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 50 PS.",
			'it-it': "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 50.",
			'pt-br': "Coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 50.",
			'de-de': "Lege so lange Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP gleich 50 sind."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Yoga Kick",
			'fr-fr': "Yoga Kick",
			'es-es': "Patada Yoga",
			'it-it': "Calcio Yoga",
			'pt-br': "Chute Ioga",
			'de-de': "Yogakick"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			'de-de': "Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert."
		},

		damage: 190
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 786015,
				tcgplayer: 567455
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Yamashita",

}

export default card
