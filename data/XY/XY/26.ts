import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Delphox",
		fr: "Goupelin",
		es: "Delphox",
		it: "Delphox",
		pt: "Delphox",
		de: "Fennexis"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		655,
	],
	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Braixen",
		fr: "Roussil",
		es: "Braixen",
		it: "Braixen",
		pt: "Braixen",
		de: "Rutena"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mystical Fire",
				fr: "Feu Ensorcelé",
				es: "Llama Embrujada",
				it: "Magifiamma",
				pt: "Fogo Místico",
				de: "Magieflamme"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw cards until you have 6 cards in your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes robar cartas hasta que tengas 6 cartas en tu mano.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare fino ad avere sei carte in mano.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá comprar cards até ter 6 cards na mão.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du so viele Karten ziehen, bis du 6 Karten auf der Hand hast."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blaze Ball",
				fr: "Balle Incendiaire",
				es: "Bola Ascuas",
				it: "Pallafuoco",
				pt: "Bola de Fogo",
				de: "Brandball"
			},
			effect: {
				en: "This attack does 20 more damage for each Fire Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Fire attachée à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Fire unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Fire assegnata a questo Pokémon.",
				pt: "Esse ataque causa 20 de danos adicionais para cada Energia Fire ligada a este Pokémon.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Fire-Energie zu."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
