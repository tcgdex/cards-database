import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
		es: "Accelgor",
		it: "Accelgor",
		pt: "Accelgor",
		de: "Hydragil"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		617,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume",
		de: "Schnuthelm"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Acid Spray",
				fr: "Bombe Acide",
				de: "Säurespeier"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Lege bei „Kopf“ 1 an das Verteidigende Pokémon angelegte Energie auf den Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup Déchirant",
				de: "Schlitzender Schlag"
			},
			effect: {
				en: "This Pokémon can't use Slashing Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
				de: "Dieses Pokémon kann Schlitzender Schlag während deines nächsten Zuges nicht einsetzen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "Having removed its heavy shell, it becomes very light and can fight with ninja-like movements.",
		de: "Seit es die schwere Muschel abgestreift hat, ist es viel leichter. Nun gleichen seine Kampfbewegungen denen eines Ninja."
	},

	thirdParty: {
		cardmarket: 280135,
		tcgplayer: 83459
	}
}

export default card
