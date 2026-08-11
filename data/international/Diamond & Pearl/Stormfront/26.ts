import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Skuntank",
		fr: "Moufflair",
		de: "Skuntank"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		435,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Stunky",
		fr: "Moufouette",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Gas",
				fr: "Gaz d'évolution",
				de: "Evolutionsgas"
			},
			effect: {
				en: "Once during your turn (before your attack), when you play Skuntank from your hand to evolve 1 of your Active Pokémon, you may choose 1 of the Defending Pokémon. If that Pokémon tries to attack during your opponent's next turn, that attack does nothing.",
				fr: "Une seule fois lors du tour (avant votre attaque), lorsque vous jouez Moufflair de votre main pour faire évoluer 1 de vos Pokémon Actifs, vous pouvez choisir 1 des Pokémon Défenseurs. Si ce Pokémon essaye d'attaquer lors du prochain tour de votre adversaire, cette attaque est sans effet.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Skuntank von deiner Hand spielst, um 1 deiner Aktiven Pokémon zu entwickeln, 1 Verteidigendes Pokémon wählen. Falls das gewählte Pokémon während des nächsten Zuges deines Gegners angreift, hat dieser Angriff keine Auswirkungen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Claws",
				fr: "Griffes empoisonnées",
				de: "Giftkrallen"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Plunder",
				fr: "Pillage",
				de: "Plündern"
			},
			effect: {
				en: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Dresseur attachées au Pokémon Défenseur.",
				de: "Bevor der Schaden zugefügt wird, entferne alle Trainerkarten, die am Verteidigenden Pokémon angelegt sind, und lege sie auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278324,
		tcgplayer: 89280
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
