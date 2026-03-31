import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Landorus",
		fr: "Démétéros",
		es: "Landorus",
		de: "Demeteros",
		it: "Landorus",
		pt: "Landorus"
	},
	set: Set,
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		645
	],
	hp: 120,
	types: [
		"Fighting"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting"
			],
			name: {
				en: "Rock Tumble",
				fr: "Roule-Pierre",
				es: "Avalancha de Rocas",
				de: "Rollende Felsen",
				it: "Tiramassi",
				pt: "Desabamento de Pedras"
			},
			damage: "50",
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência."
			}
		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			name: {
				en: "Screw Knuckle",
				fr: "Poing Vis",
				es: "Nudillo Tornillo",
				de: "Windende Faust",
				it: "Avvitapugno",
				pt: "Punho Parafuso"
			},
			damage: "120",
			effect: {
				en: "Put an Energy attached to this Pokémon into your hand.",
				fr: "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
				es: "Pon 1 Energía unida a este Pokémon en tu mano.",
				de: "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand.",
				it: "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
				pt: "Coloque uma Energia ligada a este Pokémon na sua mão."
			}
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "aoki",
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
