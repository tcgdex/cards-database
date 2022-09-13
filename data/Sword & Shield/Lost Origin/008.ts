import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Beautifly",
		fr: "Charmillon",
		es: "Beautifly",
		it: "Beautifly",
		pt: "Beautifly",
		de: "Papinella"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
		es: "Silcoon",
		it: "Silcoon",
		pt: "Silcoon",
		de: "Schaloko"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Stoked Straw",
			fr: "Trompe Ravie",
			es: "Trompa Ávida",
			it: "Euforicannuccia",
			pt: "Canudo Empolgado",
			de: "Begeisterter Rüssel"
		},

		effect: {
			en: "Once during your turn, you may draw cards until you have 6 cards in your hand.",
			fr: "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			es: "Una vez durante tu turno, puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			it: "Una sola volta durante il tuo turno, puoi pescare fino ad avere sei carte in mano.",
			pt: "Uma vez durante o seu turno, você poderá comprar cartas até ter 6 cartas na sua mão.",
			de: "Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
			es: "Megaagotar",
			it: "Megassorbimento",
			pt: "Megadreno",
			de: "Megasauger"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card
