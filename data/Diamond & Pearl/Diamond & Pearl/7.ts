import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Luxray",
		fr: "Luxray",
		de: "Luxtra"
	},
	illustrator: "Mikiko Takeda",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		405,
	],
	hp: 120,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Luxio",
		fr: "Luxio",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sharp Eye",
				fr: "Brilloeil",
				de: "Glühauge"
			},
			effect: {
				en: "Once during your turn, when you play Luxray from your hand to evolve 1 of your Pokémon, you may look at your opponent's hand. If your opponent's Bench isn't full, choose 1 Basic Pokémon from your opponent's hand, and put it onto his or her Bench. Then, switch it with the Defending Pokémon.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Luxray de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez regarder la main de votre adversaire. Si le Banc de votre adversaire n'est pas plein, choisissez-y 1 Pokémon de Base et placez-le sur son Banc. Ensuite, échangez-le avec le Pokémon Défenseur.",
				de: "Einmal während deines Zuges, wenn du Luxtra von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dir die Handkarten deines Gegners anschauen. Wenn die Bank deines Gegners nicht voll besetzt ist, wähle 1 Basis-Pokémon-Karte von der Hand deines Gegners und lege sie auf seine Bank. Danach tausche das Verteidigende Pokémon gegen das gewählte Pokémon aus."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Lightning Star",
				fr: "Étoile éclatante",
				de: "Blitzstern"
			},
			effect: {
				en: "Move all Lightning Energy attached to Luxray to 1 of your Benched Pokémon. (Ignore this effect if you don't have any Benched Pokémon.)",
				fr: "Déplacez toutes les Énergies Lightning attachées à Luxray sur 1 de vos Pokémon de Banc. (Ignorez cet effet si vous n'avez pas de Pokémon de Banc.)",
				de: "Entferne alle an Luxtra angelegten -Energien und lege sie an 1 Pokémon auf deiner Bank an. (Dieser Effekt hat keine Auswirkungen, wenn du keine Pokémon auf der Bank hast.)"
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
