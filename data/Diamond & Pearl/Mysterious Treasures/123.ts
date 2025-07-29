import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
		de: "Magbrant"
	},

	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		467,
	],

	hp: 130,

	types: [
		"Fire",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Torrid Wave",
				fr: "Vague torride",
				de: "Versengende Welle"
			},
			effect: {
				en: "Once during your turn (before your attack), if Magmortar is your Active Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Burned. Put 3 damage counters instead of 2 on that Pokémon between turns. This power can't be used if Magmortar is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Maganon est votre Pokémon Actif, vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Brûlé. Placez 3 marqueurs de dégât au lieu de 2 sur ce Pokémon entre 2 tours. Ce pouvoir ne peut pas être utilisé si Maganon est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Magbrant dein Aktives Pokémon ist, 1 Verteidigendes Pokémon wählen. Das gewählte Pokémon ist jetzt verbrannt. Lege zwischen den Zügen 3 Schadensmarken anstelle von 2 Schadensmarken auf das gewählte Pokémon. Diese Poké-Power kann nicht benutzt werden, wenn Magbrant von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Flame Bluster",
				fr: "Rafale de flammes",
				de: "Flammengetöse"
			},
			effect: {
				en: "Discard 2 Fire Energy attached to Magmortar. Choose 1 of your opponent's Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) During your next turn, Magmortar can't use Flame Bluster.",
				fr: "Défaussez 2 Énergies Fire attachées à Maganon. Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 100 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Lors de votre prochain tour, Maganon ne peut pas utiliser Rafale de flammes.",
				de: "Lege 2 an Magbrant angelegte -Energien auf deinen Ablagestapel. Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Magbrant kann Flammengetöse in deinem nächsten Zug nicht einsetzen."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 277641
	}
}

export default card
