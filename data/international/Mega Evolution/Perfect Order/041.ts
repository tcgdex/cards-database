import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [645],

	name: {
		'en-us': "Landorus",
		'fr-fr': "Démétéros",
		'es-es': "Landorus",
		'es-mx': "Landorus",
		'de-de': "Demeteros",
		'it-it': "Landorus",
		'pt-br': "Landorus"
	},

	illustrator: "aoki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Rock Tumble",
			'fr-fr': "Roule-Pierre",
			'es-es': "Avalancha de Rocas",
			'es-mx': "Deslave Rocoso",
			'de-de': "Rollende Felsen",
			'it-it': "Tiramassi",
			'pt-br': "Desabamento de Pedras"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência."
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Screw Knuckle",
			'fr-fr': "Poing Vis",
			'es-es': "Nudillo Tornillo",
			'es-mx': "Nudillo Sacacorchos",
			'de-de': "Windende Faust",
			'it-it': "Avvitapugno",
			'pt-br': "Punho Parafuso"
		},

		effect: {
			'en-us': "Put an Energy attached to this Pokémon into your hand.",
			'fr-fr': "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			'es-es': "Pon 1 Energía unida a este Pokémon en tu mano.",
			'es-mx': "Pon 1 Energía unida a este Pokémon en tu mano.",
			'de-de': "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand.",
			'it-it': "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma Energia ligada a este Pokémon na sua mão."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684427,
				cardmarket: 877455
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684427,
				cardmarket: 877455
			}
		},
		{
			type: "normal"
		}
	],

}

export default card
