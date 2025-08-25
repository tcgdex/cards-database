import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [949],
	set: Set,

	name: {
		en: "Toedscruel",
		fr: "Terracruel",
		es: "Toedscruel",
		it: "Toedscruel",
		pt: "Toedscruel",
		de: "Tenterra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Slime Mold Colony",
			fr: "Colonie de Myxomycètes",
			es: "Colonia Moho-cosa",
			it: "Colonia Melmamuffa",
			pt: "Colônia de Bolor Limoso",
			de: "Schleimpilzkolonie"
		},

		effect: {
			en: "Cards in your opponent's discard pile can't be put into their hand by an effect of your opponent's Abilities or Trainer cards.",
			fr: "Les cartes dans la pile de défausse de votre adversaire ne peuvent pas être ajoutées à sa main par les effets des talents ou cartes Dresseur de votre adversaire.",
			es: "Las cartas en la pila de descartes de tu rival no pueden ponerse en su mano por ningún efecto de las habilidades o cartas de Entrenador de tu rival.",
			it: "Le carte nella pila degli scarti del tuo avversario non possono essere aggiunte a quelle che ha in mano per effetto delle abilità o delle carte Allenatore del tuo avversario.",
			pt: "Cartas na pilha de descarte do seu oponente não podem ser colocadas na mão dele pelos efeitos de Habilidades ou cartas de Treinador do seu oponente.",
			de: "Karten im Ablagestapel deines Gegners können nicht durch einen Effekt von Fähigkeiten oder Trainerkarten deines Gegners auf seine Hand genommen werden."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Mushroom Drain",
			fr: "Champi Drain",
			es: "Drenaje Seta",
			it: "Micoassorbimento",
			pt: "Dreno de Cogumelo",
			de: "Pilzsauger"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Toshinao Aoki",

	thirdParty: {
		cardmarket: 740493
	}
}

export default card