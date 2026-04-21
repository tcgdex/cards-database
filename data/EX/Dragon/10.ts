import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Salamence",
		fr: "Drattak",
		de: "Brutalanda"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dragon Wind",
				fr: "Vent de dragon",
				de: "Drachenwind"
			},
			effect: {
				en: "Once during your turn (before your attack), if Salamence is your Active Pokémon, you may switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. This power can't be used if Salamence is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Drattak est votre Pokémon Actif, vous pouvez échanger un des Pokémon du Banc de votre adversaire contre un des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger. Ce pouvoir ne peut pas être utilisé si Drattak est affecté par un État spécial.",
				de: "Du kannst diese Pokémon-Power einmal während deines Zuges (vor deinem Angriff) anwenden, falls Brutalanda dein Aktives Pokémon ist. Tausche 1 Verteidigendes Pokémon mit 1 der Pokémon auf der Bank deines gegners aus. Dein gegner wählt aus, welches Verteidigende Pokémon getauscht wird. Diese Poke-Power kann nicht verwendet werden, falls Brutalanda von einem Speziellen Zustand betroffen ist."
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
				en: "Agility",
				fr: "Hâte",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Salamence during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaque, y compris les dégâts, infligés à Drattak.",
				de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Angriffen (einschließlich Schaden), die Brutalanda zugefügt werden."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Griffe de dragon",
				de: "Drachenklaue"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Fire",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 88895,
		cardmarket: 275887
	}
}

export default card
