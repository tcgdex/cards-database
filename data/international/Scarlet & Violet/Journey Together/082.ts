import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [377],
	set: Set,

	name: {
		'en-us': "Regirock",
		'fr-fr': "Regirock",
		'es-es': "Regirock",
		'de-de': "Regirock",
		'it-it': "Regirock",
		'pt-br': "Regirock",
		'es-mx': "Regirock"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Rock Armor",
			'fr-fr': "Armure Rocheuse",
			'es-es': "Armadura Rocosa",
			'de-de': "Steinrüstung",
			'it-it': "Rocciacorazza",
			'pt-br': "Armadura de Pedra",
			'es-mx': "Armadura Rocosa"
		},

		effect: {
			'en-us': "If this Pokémon has any Energy attached, it takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Si de l'Énergie est attachée à ce Pokémon, il subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Si este Pokémon tiene alguna Energía unida, los ataques le hacen 30 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Energie angelegt ist, werden ihm durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Se questo Pokémon ha delle Energie assegnate, subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Se este Pokémon tiver alguma Energia ligada a ele, receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Si este Pokémon tiene alguna Energía unida, los ataques le hacen 30 puntos de daño menos (después de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Breaching Lariat",
			'fr-fr': "Lasso Perforateur",
			'es-es': "Lazo Destructor",
			'de-de': "Durchbrechendes Lasso",
			'it-it': "Spaccalazo",
			'pt-br': "Laço Destruidor",
			'es-mx': "Lazo Destructor"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",
	illustrator: "Uta",

	variants: [
		{
		type: "holo",
		thirdParty: {
			cardmarket: 817234,
			tcgplayer: 623509
		}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817234,
				tcgplayer: 623509
			}
		},
		
	],
}

export default card
