import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [645],

	name: {
		en: "Landorus",
		fr: "Démétéros",
		es: "Landorus",
		'es-mx': "Landorus",
		de: "Demeteros",
		it: "Landorus",
		pt: "Landorus"
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
			en: "Rock Tumble",
			fr: "Roule-Pierre",
			es: "Avalancha de Rocas",
			'es-mx': "Deslave Rocoso",
			de: "Rollende Felsen",
			it: "Tiramassi",
			pt: "Desabamento de Pedras"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência."
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Screw Knuckle",
			fr: "Poing Vis",
			es: "Nudillo Tornillo",
			'es-mx': "Nudillo Sacacorchos",
			de: "Windende Faust",
			it: "Avvitapugno",
			pt: "Punho Parafuso"
		},

		effect: {
			en: "Put an Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			es: "Pon 1 Energía unida a este Pokémon en tu mano.",
			'es-mx': "Pon 1 Energía unida a este Pokémon en tu mano.",
			de: "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand.",
			it: "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma Energia ligada a este Pokémon na sua mão."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684427,
		cardmarket: 877455
	}
}

export default card
