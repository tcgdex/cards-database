import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		es: "Raichu",
		it: "Raichu",
		pt: "Raichu",
		de: "Raichu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Evoshock",
				fr: "Choc Évolutif",
				es: "Evoimpacto",
				it: "Evoshock",
				pt: "Evochoque",
				de: "Evoschock"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may leave your opponent’s Active Pokémon Paralyzed.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Paralysé.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Paralizado.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario paralizzato.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode deixar o Pokémon Ativo do seu oponente Paralisado.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du das Aktive Pokémon deines Gegners paralysieren."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Volt Tackle",
				fr: "Électacle",
				es: "Placaje Eléc",
				it: "Locomovolt",
				pt: "Investida Trovão",
				de: "Volttackle"
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
				es: "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 30 danni a se stesso.",
				pt: "Este Pokémon causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299445,
		tcgplayer: 138523
	}
}

export default card
