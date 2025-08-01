import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Jumpluff",
		fr: "Cotovol",
		es: "Jumpluff",
		it: "Jumpluff",
		pt: "Jumpluff",
		de: "Papungha"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		189,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Skiploom",
		fr: "Floravol",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Leave It to the Wind",
				fr: "Vole au Vent",
				es: "A Merced del Viento",
				it: "Soffione",
				pt: "Deixar ao Vento",
				de: "Windverwehung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may return this Pokémon and all cards attached to it to your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez reprendre ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes devolver este Pokémon y todas las cartas unidas a él a tu mano.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi riprendere in mano questo Pokémon e tutte le carte a esso assegnate.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá devolver este Pokémon e todos os cards ligados a ele para sua mão.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dieses Pokémon und alle daran angelegten Karten zurück auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Acrobatics",
				fr: "Acrobatie",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 280442,
		tcgplayer: 86368
	}
}

export default card
