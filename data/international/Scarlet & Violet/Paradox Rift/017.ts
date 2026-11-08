import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [949],
	set: Set,

	name: {
		'en-us': "Toedscruel",
		'fr-fr': "Terracruel",
		'es-es': "Toedscruel",
		'it-it': "Toedscruel",
		'pt-br': "Toedscruel",
		'de-de': "Tenterra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Toedscool",
		'fr-fr': "Terracool",
		'es-es': "Toedscool",
		'it-it': "Toedscool",
		'pt-br': "Toedscool",
		'de-de': "Tentagra"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Slime Mold Colony",
			'fr-fr': "Colonie de Myxomycètes",
			'es-es': "Colonia Moho-cosa",
			'it-it': "Colonia Melmamuffa",
			'pt-br': "Colônia de Bolor Limoso",
			'de-de': "Schleimpilzkolonie"
		},

		effect: {
			'en-us': "Cards in your opponent's discard pile can't be put into their hand by an effect of your opponent's Abilities or Trainer cards.",
			'fr-fr': "Les cartes dans la pile de défausse de votre adversaire ne peuvent pas être ajoutées à sa main par les effets des talents ou cartes Dresseur de votre adversaire.",
			'es-es': "Las cartas en la pila de descartes de tu rival no pueden ponerse en su mano por ningún efecto de las habilidades o cartas de Entrenador de tu rival.",
			'it-it': "Le carte nella pila degli scarti del tuo avversario non possono essere aggiunte a quelle che ha in mano per effetto delle abilità o delle carte Allenatore del tuo avversario.",
			'pt-br': "Cartas na pilha de descarte do seu oponente não podem ser colocadas na mão dele pelos efeitos de Habilidades ou cartas de Treinador do seu oponente.",
			'de-de': "Karten im Ablagestapel deines Gegners können nicht durch einen Effekt von Fähigkeiten oder Trainerkarten deines Gegners auf seine Hand genommen werden."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Mushroom Drain",
			'fr-fr': "Champi Drain",
			'es-es': "Drenaje Seta",
			'it-it': "Micoassorbimento",
			'pt-br': "Dreno de Cogumelo",
			'de-de': "Pilzsauger"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It coils its 10 tentacles around prey and sucks out their nutrients, causing the prey pain. The folds along the rim of its head are a popular delicacy.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740493,
				tcgplayer: 523617,
				cardtrader: 265065
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740493,
				tcgplayer: 523617,
				cardtrader: 265065
			}
		},
	],

	illustrator: "Toshinao Aoki",

	
}

export default card
