import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Entei",
		fr: "Entei",
		de: "Entei"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Legendary Body",
				fr: "Corps légendaire",
				de: "Legendärer Körper"
			},
			effect: {
				en: "As long as Entei is your Active Pokémon, Entei and Energy cards attached to it aren't affected by effects from Trainer cards other than Trainer cards other than Stadium cards. As long as this power is active, discard all Trainer cards attached to Entei. (This power works even if Entei is Asleep, Confused, or Paralyzed.)",
				fr: "Tant que Entei est votre Pokémon Actif, Entei et les cartes Énergie qui y sont attachées ne sont pas affectés par les cartes Dresseur autres que les cartes Stade. Tant que ce Pouvoir est actif, défaussez toutes les cartes Dresseurs attachées à Entei. (Ce pouvoir fonctionne même si Entei est Endormi, Confus ou Paralysé.)",
				de: "Solange Entei dein aktives Pokémon ist, sind Stadion-Karten, die einzigen Trainer-Karten, die Auswirkungen auf Entei und an es angelegte Energiekarten haben. Solange diese Fähigkeit aktiv ist, lege alle Trainerkarten, die an Entei angelegt sind, auf den Ablagestapel. (Diese Fähigkeit wirkt selbst dann, wenn Entei schläft, verwirrt oder gelähmt ist.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Mega Flame",
				fr: "Mega flamme",
				de: "Megaflamme"
			},
			effect: {
				en: "Flip 2 coins. For each tails, discard 1 Energy card from Entei, if it has any.",
				fr: "Lancez 2 pièces. Pour chaque pile, défaussez une carte Énergie  attachée à Entei, le cas échéant.",
				de: "Wirf zwei Münzen. Lege für jedesmal 'Zahl' eine an Entei angelegte -Energiekarte auf deinen Ablagestapel, wenn an es welche angelegt sind."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Un Pokémon qui fonce à travers le monde. On raconte qu'il en naît un nouveau à chaque fois qu'un volcan apparaît à la surface de la Terre."
	},

	thirdParty: {
		cardmarket: 274592
	}
}

export default card
