import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Togekiss",
		fr: "Togekiss",
		es: "Togekiss",
		it: "Togekiss",
		pt: "Togekiss",
		de: "Togekiss"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		468,
	],

	hp: 140,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Togetic",
		fr: "Togetic",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fairy Feast",
				fr: "Festin Féérique",
				es: "Festín Feérico",
				it: "Festa Fatata",
				pt: "Banquete de Fadas",
				de: "Feenschmaus"
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 30 damage from each of your Fairy Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à chacun de vos Pokémon Fairy.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes curar 30 puntos de daño a cada uno de tus Pokémon Fairy.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi curare ciascuno dei tuoi Pokémon Fairy da 30 danni.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 30 pontos de dano de cada um dos seus Pokémon Fairy.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 30 Schadenspunkte bei jedem deiner Fairy-Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Magical Shot",
				fr: "Coup Magique",
				es: "Disparo Mágico",
				it: "Magicolpo",
				pt: "Tiro Mágico",
				de: "Magischer Schuss"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372425
	}
}

export default card
